##  Launching AWS EC2 Instance for MERN Application

###  Steps to Launch EC2 Instance:

1. Go to **AWS Console** → **EC2 Dashboard**
2. Click on **"Launch Instance"**

###  Configuration:

- **Name**: `mern-app-instance`
- **AMI**: Select **Amazon Linux 2** *(or Ubuntu if preferred)*
- **Instance Type**: `t2.micro` *(or `t3.large` if more resources are needed)*
- **Key Pair**: Choose an existing one or create a new key pair

---

### 🌐 Network Settings:

Select an existing security group or create a new one and **add the following inbound rules**:

| Type         | Port | Source       | Purpose        |
|--------------|------|--------------|----------------|
| Custom TCP   | 5173 | 0.0.0.0/0    | Frontend Access |
| Custom TCP   | 4000 | 0.0.0.0/0    | Backend Access  |
| SSH          | 22   | Your IP      | Secure SSH Login |

---

###  Launch and Connect:

After launching:

```bash
ssh -i your-key.pem ec2-user@<EC2-Public-IP>
