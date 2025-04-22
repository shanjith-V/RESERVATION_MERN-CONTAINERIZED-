# ⚙️ Install Jenkins on AWS EC2

## ☁️ EC2 Setup for Jenkins

1. Go to **EC2 > Instances**, and click on your instance.
2. In the bottom tabs, click **Security**, then **Security groups**.
3. Edit inbound rules:
   - Add a **Custom TCP Rule** with **Port 8080** and **Source: 0.0.0.0/0** (or restrict to your IP for security).

---

## ☕ Install Java (Jenkins Requirement)

- `sudo apt update`
- `sudo apt install openjdk-17-jre`

---

## 📥 Install Jenkins

1. Add the Jenkins repository and key:


2. Update and install Jenkins:

- `sudo apt-get update`
- `sudo apt-get install jenkins`

---

## 🔑 Get Jenkins Admin Password

After Jenkins is installed, retrieve the initial admin password using:

- `sudo cat /var/lib/jenkins/secrets/initialAdminPassword`

Use this password to unlock Jenkins at:  
**`http://<EC2-Public-IP>:8080`**

---

## 🔌 Install Docker Pipeline Plugin

1. Log in to Jenkins.
2. Navigate to **Manage Jenkins > Manage Plugins**.
3. Go to the **Available** tab and search for `"Docker Pipeline"`.
4. Select it and click **Install without restart**.
5. After installation, restart Jenkins.

---

## 🐳 Docker Setup for Jenkins

Install Docker:

- `sudo apt update`
- `sudo apt install docker.io`

---

### 👥 Add Jenkins and Ubuntu Users to Docker Group

To allow Jenkins and Ubuntu to access Docker:

1. Switch to root:

- `sudo su -`

2. Add users to the Docker group:

- `usermod -aG docker jenkins`
- `usermod -aG docker ubuntu`

3. Restart Docker:

- `systemctl restart docker`

---

## 🔁 Restart Jenkins

You can restart Jenkins by visiting:

**`http://<EC2-Public-IP>:8080/restart`**

---

Now Jenkins is ready for CI/CD pipelines using Docker! 🚀
