pipeline {
    agent any

    environment {
        DOCKER_FRONTEND_IMAGE = 'shanjithv/frontendcicd:latest'
        DOCKER_BACKEND_IMAGE = 'shanjithv/backendcicd:latest'
        DOCKERHUB_CREDENTIALS = 'docker-cred'
        AWS_CREDENTIALS = 'aws-cred'
        EC2_HOST = '15.206.209.83'
        SSH_KEY_CREDENTIALS = 'ssh-ec2-key'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/shanjith-V/RESERVATION_MERN-CONTAINERIZED-.git'
            }
        }

        stage('Docker Build - Frontend') {
            steps {
                script {
                    docker.build(DOCKER_FRONTEND_IMAGE, '-f Frontend/Dockerfile ./Frontend')
                }
            }
        }

        stage('Docker Build - Backend') {
            steps {
                script {
                    docker.build(DOCKER_BACKEND_IMAGE, '-f Backend/Dockerfile ./Backend')
                }
            }
        }

        stage('Docker Hub Login and Push Frontend') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'DOCKERHUB_CREDENTIALS', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh """
                        echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin
                        docker push $DOCKER_FRONTEND_IMAGE
                        """
                    }
                }
            }
        }

        stage('Docker Hub Login and Push Backend') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'DOCKERHUB_CREDENTIALS', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh """
                        echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin
                        docker push $DOCKER_BACKEND_IMAGE
                        """
                    }
                }
            }
        }

        stage('Deploy Frontend to EC2') {
            steps {
                sshagent([SSH_KEY_CREDENTIALS]) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ubuntu@$EC2_HOST "
                        docker pull shanjithv/frontendcicd:latest
                        docker stop frontendcicd-container || true
                        docker rm frontendcicd-container || true
                        docker run -d -p 5173:5173 --name frontendcicd-container shanjithv/frontendcicd:latest
                    "
                    '''
                }
            }
        }

        stage('Deploy Backend to EC2') {
            steps {
                sshagent([SSH_KEY_CREDENTIALS]) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ubuntu@$EC2_HOST "
                        docker pull shanjithv/backendcicd:latest
                        docker stop backendcicd-container || true
                        docker rm backendcicd-container || true
                        docker run -d -p 4000:4000 --name backendcicd-container shanjithv/backendcicd:latest
                    "
                    '''
                }
            }
        }
    }
}
