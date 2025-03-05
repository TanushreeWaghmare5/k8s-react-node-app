# Use Node.js base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy all files
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]
