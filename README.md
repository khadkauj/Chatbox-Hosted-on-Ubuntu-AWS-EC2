
This is a ReactJS chatbox application hosted on AWS EC2 Ubuntu instance on port 3000 using nginx and PM2. The chatbox's backend uses Firebase, including Firebase Authentication for secure user access.

Stacks used: <b> React(frontend), Firebase(Database), AWS(Ubuntu EC2, Elastic IP, cloudfront, Route 53) </b>

Server address: http://52.210.194.140 </br>
Live Demo: http://52.210.194.140:3000

Pleas make sure it's http and not https.The domain under cloudfront https would soon be added.

## Installation

### NPM

```bash
git clone https://github.com/khadkauj/Chatbox-Hosted-on-Ubuntu-AWS-EC2.git

cd Chatbox-Hosted-on-Ubuntu-AWS-EC2

npm install 

npm run dev
# or
yarn dev
```

### Docker Container

1. Install [Docker](https://www.docker.com)
2. Pull the Docker image by running </br>
  `docker pull ujjwalinnfinxx/chatbox:latest`
3. Run </br>
  `docker run -p 3000:3000 ujjwalinnfinxx/chatbox:latest`


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
