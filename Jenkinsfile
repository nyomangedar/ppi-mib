pipeline {
    agent any
    // agent {
    //     any
    //     // docker {
    //     //     image 'node'
    //     //     args '-u root'
    //     // }
    // }

    stages {
        stage('Stopping server'){
            steps{
                echo 'Stopping server'
                sh 'sudo pm2 stop 0'
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
        stage('Updating Packages'){
            steps{
                echo 'Updating'
                sh 'sudo ncu -u'
            }
        }
        stage('Building Node') {
            steps {
                echo 'Building...'
                sh 'sudo npm install'
            }
        }
        // stage('Building React'){
        //     steps{
        //         echo 'Installing dependencies'
        //         sh 'npm ci'
        //         echo 'npm run build '
        //     }
        // }
        
        stage('Starting server'){
            steps{
                echo 'Start Server'
                sh 'sudo pm2 start all'
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