pipeline {
    agent any

    tools {
        nodejs "Node18"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test --reporter=html'
            }
        }

        stage('Publish Test Report') {
            steps {
                publishHTML(target: [
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Test Report',
                    allowMissing: false,
                    keepAll: true,
                    alwaysLinkToLastBuild: true
                ])
            }
        }
    }

    post {
        failure {
            echo "❌ Build failed!"
        }
        success {
            echo "✅ Playwright tests finished successfully."
        }
    }
}
