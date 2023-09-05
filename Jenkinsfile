pipeline {
    agent any
    stages {
        stage('Before Setup'){
            steps{
                try{
                    sh 'sudo pm2 stop 0'
                } catch(Exception e){
                    echo 'No process are detected'
                }
                
            }
        }
        stage('Environment Setup'){
            steps{
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
        }
        stage('Installing dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('Starting Server'){
            steps{
                try{
                    sh 'sudo pm2 start 0'
                } catch(Exception e){
                    echo 'No initial server started'
                    sh 'sudo pm2 start server.js'
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





// pipeline {
//     agent any
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