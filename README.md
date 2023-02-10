
This is an Ubuntu operating system instance on Amazon Web Services (AWS) EC2 which us hosting a ReactJS chatbox application on port 3000. The chatbox's backend uses Firebase, including Firebase Authentication for secure user access.

Stacks used: React(frontend), Firebase(Database), AWS(Ubuntu EC2 for hosting server)

Server address: http://52.210.194.140 </br>
Live Demo: http://52.210.194.140:3000

Pleas make sure it's http and https.The domain under cloudfront https would soon be added.

## Installation

### NPM
First, run the development server:

```bash
npm install --force

npm run start
# or
yarn start
```

### Docker Container

1. Install [Docker](https://www.docker.com)
2. Pull the Docker image by running `docker pull ujjwalinnfinxx/chatbox:latest`
3. Run `docker run -p 3000:3000 ujjwalinnfinxx/chatbox:latest`


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
