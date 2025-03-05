# Kubernetes Project

🚀 **Kubernetes Project - Deploying React & Node.js in Kubernetes**

This project demonstrates how to deploy a full-stack React and Node.js application in a Kubernetes cluster. The backend is a Node.js API, and the frontend is a React application that interacts with it.

## Features
- 📦 React frontend + Node.js backend
- 🐳 Dockerized services
- ⚡ Deployed in Kubernetes
- 🔄 API request counter
- 🌙 Dark mode toggle

## Prerequisites
Make sure you have the following installed:
- [Docker](https://www.docker.com/)
- [Kubernetes (kubectl)](https://kubernetes.io/docs/tasks/tools/)
- [Minikube](https://minikube.sigs.k8s.io/docs/) or a running K8s cluster
- [Helm](https://helm.sh/)
- [Git](https://git-scm.com/)

## Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/kubernetes-project.git
cd kubernetes-project
```

### 2️⃣ Build and Push Docker Images
```sh
docker build -t your-dockerhub-username/k8s-backend:latest -f backend/Dockerfile ./backend
docker build -t your-dockerhub-username/k8s-frontend:latest -f frontend/Dockerfile ./frontend

docker push your-dockerhub-username/k8s-backend:latest
docker push your-dockerhub-username/k8s-frontend:latest
```

### 3️⃣ Deploy to Kubernetes
```sh
kubectl apply -f k8s/
```

### 4️⃣ Verify Deployment
```sh
kubectl get pods
kubectl get services
```

### 5️⃣ Access the Application
Find the NodePort service:
```sh
kubectl get svc
```
Use the external IP or `minikube service k8s-frontend` (if using Minikube) to access the app.

## Directory Structure
```
📂 kubernetes-project
 ┣ 📂 backend        # Node.js API backend
 ┣ 📂 frontend       # React frontend
 ┣ 📂 k8s            # Kubernetes deployment files
 ┣ 📜 README.md      # Documentation
 ┗ 📜 Dockerfile     # Docker configuration
```

## Monitoring (To be added)
Prometheus & Grafana setup is planned for monitoring.

## Contributing
Feel free to fork this project and submit pull requests! 🎉

## License
MIT License © 2025 Your Name
