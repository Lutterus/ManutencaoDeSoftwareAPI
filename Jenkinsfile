node {

    currentBuild.result = "SUCCESS"

    try {

        stage('Delete Repo Milhas'){
            sh 'ssh root@10.32.223.4 -p 5439 "rm -rf /opt/docker/milhas/api"'
        }

        stage('Clone Repo Milhas Api'){
           sh 'ssh root@10.32.223.4 -p 5439 "git clone --depth 1 --branch integracao http://www.tools.ages.pucrs.br/milhas/API.git milhas/api"'
        }

        stage('Down Docker Images'){
           sh 'ssh root@10.32.223.4 -p 5439 "cd /opt/docker/milhas/api; docker-compose down;"'
        }

        stage('Build and Up Docker Images'){
           sh 'ssh root@10.32.223.4 -p 5439 "cd /opt/docker/milhas/api;  docker-compose up --build -d"'
        }

        stage('Success'){
            mail body: 'project Milhas Api build successful in HML',
                     from: 'jenkinsx@ages.com',
                     replyTo: 'cassio.trindade@pucrs.br',
                     subject: 'Success CI Milhas API',
                     to: 'cassio.trindade@pucrs.br'
        }

    }
    catch (err) {

        currentBuild.result = "FAILURE"

            mail body: "project  Milhas Api build error is here: ${env.BUILD_URL}" ,
            from: 'jenkinsx@ages.com',
            replyTo: 'cassio.trindade@pucrs.br',
            subject: 'Error CI Milhas API',
            to: 'cassio.trindade@pucrs.br'

        throw err
    }

}

