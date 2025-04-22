AWS EC2 Instance :

Go to AWS Console.
Instances(running).
Launch instances.

* Go to EC2 Dashboard → Click Launch Instance 
            Name: mern-app-instance
            AMI: Select Amazon Linux 2 (or Ubuntu as preferred)
            Instance type: t2.micro (or t3.large if needed) 
            Key pair: Choose existing or create new
*Network settings:
            Select or create a security group
Add inbound rules:
            Type: Custom TCP | Port: 5173 | Source: 0.0.0.0/0 (for frontend)
            Type: Custom TCP | Port: 4000 | Source: 0.0.0.0/0 (for backend)
            Type: SSH | Port: 22 | Source: Your IP (for secure SSH access)
Launch the instance.

ssh -i your-key.pem ec2-user@<EC2-Public-IP>

Frontend: http://<EC2-Public-IP>:5173.
Backend: http://<EC2-Public-IP>:4000.
