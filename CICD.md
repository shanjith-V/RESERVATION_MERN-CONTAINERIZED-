CI/CD Pipeline for MERN Reservation App using Jenkins, Docker, and EC2.


This project sets up a CI/CD pipeline using Jenkins that automates:

Cloning the source code.
Building Docker images for frontend and backend.
Pushing the images to Docker Hub.
Deploying the containers on an AWS EC2 instance.


Prerequisites

Jenkins server with Docker installed

AWS EC2 instance with Docker installed and ports 5173 (frontend) and 4000 (backend) exposed.

SSH access from Jenkins to EC2 (via credentials).

Docker Hub account with a valid repository.


Jenkins credentials configured:
        docker-cred: DockerHub username/password.
        aws-cred: AWS Access Key ID / Secret (if used).
        ssh-ec2-key: SSH private key for EC2 access.


Deployment Output:
Frontend is accessible at: http://15.206.209.83:5173
Backend is accessible at: http://15.206.209.83:4000
