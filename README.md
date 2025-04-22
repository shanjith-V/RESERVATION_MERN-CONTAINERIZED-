# 🍽️ MERN Reservation App - CI/CD Deployment with Jenkins, Docker, and AWS

This project demonstrates a complete DevOps workflow to automate the deployment of a MERN stack-based restaurant reservation application using **Jenkins**, **Docker**, and **AWS EC2**.

---

## 🧰 Tech Stack

- **Frontend**: React.js (Port 5173)
- **Backend**: Node.js + Express.js (Port 4000)
- **Database**: MongoDB (can be local or Atlas)
- **CI/CD**: Jenkins
- **Containerization**: Docker
- **Cloud**: AWS EC2

---

## 📦 Docker Life Cycle

There are three important Docker commands in the workflow:

- **docker build** – Builds Docker images from a `Dockerfile`
- **docker run** – Runs containers from Docker images
- **docker push** – Pushes container images to Docker Hub (public/private)

---

## 🐳 Install Docker

1. Update and install Docker:

    ```
    sudo apt update
    sudo apt install docker.io -y
    ```

2. Start Docker service:

    ```
    sudo systemctl status docker
    sudo systemctl start docker
    ```

3. Add current user to the Docker group:

    ```
    sudo usermod -aG docker ubuntu
    ```

4. Login to Docker Hub:

    ```
    docker login
    ```

    - Username: `shanjithv`
    - Password: *(your Docker Hub password)*

    > ⚠️ Your password will be stored unencrypted in `/home/ubuntu/.docker/config.json`.  
    > Use [credential store](https://docs.docker.com/engine/reference/commandline/login/#credentials-store) for security.

---

## ⚙️ Install Jenkins on AWS EC2

### EC2 Setup

1. Launch a new EC2 instance:
    - AMI: Amazon Linux 2 or Ubuntu
    - Instance type: t2.micro (or t3.large)
    - Open ports **22, 4000, 5173, 8080** in the security group

2. SSH into your instance:

    ```
    ssh -i your-key.pem ec2-user@<EC2-Public-IP>
    ```

### Install Jenkins

1. Install Java:

    ```
    sudo apt update
    sudo apt install openjdk-17-jre
    ```

2. Add Jenkins repository and key:

    ```
    curl -fsSL https://pkg.jenkins.io/debian/jenkins.io-2023.key | sudo tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null
    echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
    sudo apt-get update
    sudo apt-get install jenkins
    ```

3. Start Jenkins and get admin password:

    ```
    sudo systemctl start jenkins
    sudo cat /var/lib/jenkins/secrets/initialAdminPassword
    ```

4. Access Jenkins: `http://<EC2-Public-IP>:8080`

---

## 🔌 Install Docker Pipeline Plugin

1. Go to **Manage Jenkins > Manage Plugins**
2. Search for **Docker Pipeline** under **Available**
3. Install it and restart Jenkins

---

## 👥 Configure Jenkins for Docker

1. Install Docker on Jenkins server:

    ```
    sudo apt install docker.io
    ```

2. Add Jenkins and Ubuntu users to Docker group:

    ```
    sudo su -
    usermod -aG docker jenkins
    usermod -aG docker ubuntu
    systemctl restart docker
    ```

---

## 🔐 Jenkins Credentials Setup

In **Manage Jenkins > Credentials**, add:

- `docker-cred`: Docker Hub Username and Password
- `ssh-ec2-key`: Private key for accessing deployment EC2
- (Optional) `aws-cred`: AWS Access and Secret Keys (if Terraform or AWS CLI is used)

---

## 🔄 CI/CD Pipeline Overview

Your Jenkins pipeline should:

1. Clone the GitHub repo
2. Build Docker images for frontend and backend
3. Push the images to Docker Hub
4. SSH into EC2 and pull the images
5. Run containers on the EC2 instance

Sample pipeline steps (declarative or scripted):

- Build stage: `docker build -t ...`
- Push stage: `docker push ...`
- Deploy stage (via SSH): `docker run -d -p ...`

---

## 📡 Deployment Output

- Frontend: [http://15.206.209.83:5173](http://15.206.209.83:5173)
- Backend: [http://15.206.209.83:4000](http://15.206.209.83:4000)

---

## 📁 Folder Structure (Suggested)

## 📁 Folder Structure (Suggested)

```
/mern-reservation-app
├── frontend
│   └── Dockerfile
├── backend
│   └── Dockerfile
├── jenkins
│   └── Jenkinsfile
└── README.md
```




---

## ✅ Final Notes

- Ensure that the Docker Hub repo is **public** or your Jenkins credentials allow **private repo access**
- Use `docker-compose` if you'd like to simplify multi-container deployment
- Secure your Jenkins server by allowing only your IP or VPN in the EC2 security group

---

## 👨‍💻 Author

**Shanjith V**  
DevOps Enthusiast | AWS | Docker | Jenkins | GitHub Actions | MERN

---


