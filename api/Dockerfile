# Use the official Node.js 16 image as the base image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN yarn

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 5000 for the API
EXPOSE 5000

# Start the API
CMD [ "yarn", "start" ]