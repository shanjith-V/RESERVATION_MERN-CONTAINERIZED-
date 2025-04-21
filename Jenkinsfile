pipeline {
    agent any

    environment {
        DOCKER_FRONTEND_IMAGE = 'shanjithv/frontendCICD:latest'
        DOCKER_BACKEND_IMAGE = 'shanjithv/backendCICD:latest'
        DOCKERHUB_CREDENTIALS = 'docker-cred'
        AWS_CREDENTIALS = 'aws-cred'
        EC2_HOST = 'ec2-user@15.206.209.83'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/shanjith-V/RESERVATION_MERN-CONTAINERIZED-.git'
            }
        }

        stage('Docker Build - Frontend') {
            steps {
                script {
                    docker.build(DOCKER_FRONTEND_IMAGE, '-f Dockerfile.frontend .')
                }
            }
        }

        stage('Docker Build - Backend') {
            steps {
                script {
                    docker.build(DOCKER_BACKEND_IMAGE, '-f Dockerfile.backend .')
                }
            }
        }

        stage('Docker Hub Login and Push Frontend') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: docker-cred, usernameVariable: 'shanjithv', passwordVariable: 'sanjulathi0810')]) {
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
                    withCredentials([usernamePassword(credentialsId: docker-cred, usernameVariable: 'shanjithv', passwordVariable: 'sanjulathi0810')]) {
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
                script {
                    withCredentials([[$class: 'AmazonWebServicesCredentials', credentialsId: aws-cred]]) {
                        sh """
                        ssh -o StrictHostKeyChecking=no \$EC2_HOST << 'EOF'
                            docker pull $DOCKER_FRONTEND_IMAGE
                            docker stop frontend-container || true
                            docker rm frontend-container || true
                            docker run -d -p 5173:5173 --name frontend-container $DOCKER_FRONTEND_IMAGE
                        EOF
                        """
                    }
                }
            }
        }

        stage('Deploy Backend to EC2') {
            steps {
                script {
                    withCredentials([[$class: 'AmazonWebServicesCredentials', credentialsId: aws-cred]]) {
                        sh """
                        ssh -o StrictHostKeyChecking=no \$EC2_HOST << 'EOF'
                            docker pull $DOCKER_BACKEND_IMAGE
                            docker stop backend-container || true
                            docker rm backend-container || true
                            docker run -d -p 4000:4000 --name backend-container $DOCKER_BACKEND_IMAGE
                        EOF
                        """
                    }
                }
            }
        }
    }
}
