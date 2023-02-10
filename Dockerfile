# Use node image as base image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy the package.json file and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vite application
RUN npm run build

# Expose the port 3000
EXPOSE 3000

# Set the command to start the application
CMD [ "npm", "start" ]