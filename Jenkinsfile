pipeline {

    // agent {
    //     any
    //     // docker {
    //     //     image 'node'
    //     //     args '-u root'
    //     // }
    // }

    stages {
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
        // stage('Updating Packages'){
        //     steps{
        //         echo 'Updating'
        //         sh 'ncu -u'
        //     }
        // }
        stage('Building Node') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
        // stage('Building React'){
        //     steps{
        //         echo 'Installing dependencies'
        //         sh 'npm ci'
        //         echo 'npm run build '
        //     }
        // }
        stage('Finishing jobs'){
            steps{
                echo 'Restarting nginx'
                sh 'systemctl restart nginx'
            }
        }
        // stage('Starting server'){
        //     steps{
        //         echo 'Start Server'
        //         sh 'npm start server.js'
        //         // sh 'pm2 start server.js'
        //         // sh 'pm2 save'
        //         // echo 'Restart Nginx'
        //         // sh 'sudo service nginx restart'
        //     }
        // }
    }
}