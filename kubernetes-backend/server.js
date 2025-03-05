

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const client = require("prom-client"); // Import Prometheus client

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Create a Registry for Prometheus Metrics
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// ✅ Fix: Ensure `http_requests_total` is properly registered
const httpRequestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests received",
  labelNames: ["method", "route", "status"],
});
register.registerMetric(httpRequestCounter);

// ✅ Fix: Middleware to Count Requests
app.use((req, res, next) => {
  res.on("finish", () => {
    httpRequestCounter.labels(req.method, req.path, res.statusCode.toString()).inc();
  });
  next();
});

// Metrics Endpoint
app.get("/metrics", async (req, res) => {
  try {
    res.set("Content-Type", register.contentType);
    res.end(await register.metrics());
  } catch (error) {
    console.error("Error generating metrics:", error);
    res.status(500).send("Error generating metrics");
  }
});

// Health Check
app.get("/", (req, res) => {
  res.json({ message: "Hello from Kubernetes Backend!" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});

