pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

    stages {
        stage('Stopping Process'){
            steps{
                echo 'Stop Process'
                sh "pm2 stop all"
            }
        }
        stage('Environment Setup'){
            steps{
                echo 'Environment setup'
                sh "rm -f .env"
                sh "touch .env"
                sh """
                    echo "NODE_ENV=${env.NODE_ENV}\nDATABASE_URI=${env.DATABASE_URI}\nSECRET_KEY=${env.SECRET_KEY}" >> .env
                """
            }
        }
        stage('Building Node') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
        stage('Building React'){
            steps{
                echo 'npm install'
                sh 'npm install'
                echo 'npm run build '
            }
        }
        stage('Starting server'){
            steps{
                echo 'Start Server'
                sh 'pm2 start server.js'
                sh 'pm2 save'
                echo 'Restart Nginx'
                sh 'sudo service nginx restart'
            }
        }
    }
}