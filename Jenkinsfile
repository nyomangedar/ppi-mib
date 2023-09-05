pipeline {
    agent any
    stages {
        stage('Before Setup') {
            script {
                try {
                    sh 'sudo pm2 stop 0'
                } catch (IOException e) {
                    echo "Error stopping process 0: ${e.getMessage()}"
                }
            }
        }
        
        stage('Environment Setup') {
            echo 'Environment setup'
            sh "rm -f .env"
            sh "touch .env"
            sh """
                echo "NODE_ENV=${env.NODE_ENV}\n
                DATABASE_URI=${env.DATABASE_URI}\n
                SECRET_KEY=${env.SECRET_KEY}\n
                ACCESS_TOKEN_KEY=${env.ACCESS_TOKEN_KEY}\n
                REFRESH_TOKEN_KEY=${env.REFRESH_TOKEN_KEY}" >> .env
            """
        }
        
        stage('Installing dependencies') {
            sh 'npm install'
        }
        
        stage('Starting Server') {
            script {
                try {
                    sh 'sudo pm2 start 0'
                } catch (IOException e) {
                    echo "Error starting process 0: ${e.getMessage()}"
                    sh 'sudo pm2 start server.js'
                }
            }
        }

        stage('Finishing jobs') {
            echo 'Restarting nginx'
            sh 'sudo systemctl restart nginx'
        }
    }
}