pipeline {
    agent any
    stages {
        stage('Before Setup'){
            steps{
                script {
                    try {
                        sh 'sudo pm2 stop 0'
                    } catch (IOException e) {
                        echo "Error stopping process 0: ${e.getMessage()}"
                    }
                }
            }
        }
        stage('Environment Setup'){
            steps{
                echo 'Environment setup'
                sh "rm -f .env"
                sh "touch .env"
                sh """
                    echo "NODE_ENV=${env.NODE_ENV}\nDATABASE_URI=${env.DATABASE_URI}\nSECRET_KEY=${env.SECRET_KEY}\nACCESS_TOKEN_KEY=${env.ACCESS_TOKEN_KEY}\nREFRESH_TOKEN_KEY=${env.REFRESH_TOKEN_KEY}" >> .env
                """
            }
        }
        stage('Installing dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('Starting Server'){
            steps{
                script {
                    try {
                        sh 'sudo pm2 start 0'
                    } catch (IOException e) {
                        echo "Error starting process 0: ${e.getMessage()}"
                        sh 'sudo pm2 start server.js'
                    }
                }
            }
        }

        stage('Finishing jobs'){
            steps{
                echo 'Restarting nginx'
                sh 'sudo systemctl restart nginx'
            }
        }
    }
}