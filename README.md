# AWS Cloud Resume Challenge

[Live website](https://shahil.cloud/)

This is a project to create a cloud resume using AWS. The project is based on the [Cloud Resume Challenge](https://cloudresumechallenge.dev/). The cloud resume challaenge has allowed me to learn and implement various AWS services to create a cloud resume whilst gaining exposure to cloud and DevOps concepts.

### Services used:
- S3
- AWS CloudFront
- Route 53
- Certificate Manager
- AWS Lambda
- DynamoDB
- GitHub Actions

### Architecture:
- HTML, CSS, and JavaScript used to create the website.
- JavaScript used to retreive counter value from API and display on site
- The website is hosted on S3 and served through CloudFront.
- The domain is managed by Route 53 and the SSL certificate is managed by Certificate Manager.
- DynamoDB and Lambda function used to implement visitor counter.
- CI/CD was set up using GitHub Actions.