# 🐳 Docker Life Cycle & Installation Guide

## 📦 Docker Life Cycle

There are three important Docker commands in the container workflow:

- **docker build**: Builds Docker images from a Dockerfile.
- **docker run**: Runs a container from Docker images.
- **docker push**: Pushes the container image to public/private registries to share Docker images.

---

## 🛠️ Install Docker on Ubuntu

To install Docker on an Ubuntu-based system, follow these steps:

1. Update the package list:
   - `sudo apt update`

2. Install Docker:
   - `sudo apt install docker.io -y`

3. Check the Docker service status:
   - `sudo systemctl status docker`

4. Start the Docker service if it's not running:
   - `sudo systemctl start docker`

5. Add your current user to the Docker group to use Docker without `sudo`:
   - `sudo usermod -aG docker ubuntu`

---

## 🔐 Docker Hub Login

Use the `docker login` command to authenticate with Docker Hub.

Login with your Docker ID to push and pull images from Docker Hub.  
If you don't have a Docker ID, you can create one at: [https://hub.docker.com](https://hub.docker.com)

- **Username**: `shanjithv`
- **Password**: *(your Docker Hub password)*

> ⚠️ **Warning**:  
> Your password will be stored unencrypted in `/home/ubuntu/.docker/config.json`.  
> To remove this warning, configure a credential helper.  
> [Learn how to configure credential store](https://docs.docker.com/engine/reference/commandline/login/#credentials-store)

✅ **Login Succeeded**

---

Now you're all set to build, run, and push Docker containers! 🚀
