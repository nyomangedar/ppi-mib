pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 9000:3000' 
        }
    }
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
        stage('Build server') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Build client') {
            steps {
                sh 'cd frontend-app && npm install && npm run build'
            }
        }
    }
}





// pipeline {
//     agent any
//     // agent {
//     //     any
//     //     // docker {
//     //     //     image 'node'
//     //     //     args '-u root'
//     //     // }
//     // }

//     stages {
//         stage('Stopping server'){
//             steps{
//                 echo 'Stopping server'
//                 sh 'sudo pm2 stop 0'
//             }
//         }
//         stage('Environment Setup'){
//             steps{
//                 echo 'Environment setup'
//                 sh "rm -f .env"
//                 sh "touch .env"
//                 sh """
//                     echo "NODE_ENV=${env.NODE_ENV}\nDATABASE_URI=${env.DATABASE_URI}\nSECRET_KEY=${env.SECRET_KEY}" >> .env
//                 """
//             }
//         }
//         stage('Updating Packages'){
//             steps{
//                 echo 'Updating'
//                 sh 'sudo ncu -u'
//             }
//         }
//         stage('Building Process') {
//             steps {
//                 echo 'Building Node'
//                 sh 'sudo npm install --loglevel verbose'
//                 echo 'Building React'
//                 dir('frontend-app'){
//                     sh 'sudo npm install --loglevel verbose'
//                 }
                
//             }
//         }
//         // stage('Building React'){
//         //     steps{
//         //         echo 'Installing dependencies'
//         //         sh 'npm ci'
//         //         echo 'npm run build '
//         //     }
//         // }
        
//         stage('Starting server'){
//             steps{
//                 echo 'Start Server'
//                 sh 'sudo pm2 start 0'
//             }
//         }

//         stage('Finishing jobs'){
//             steps{
//                 echo 'Restarting nginx'
//                 sh 'sudo systemctl restart nginx'
//             }
//         }
//     }
// }