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


# Expose port 3000 for the client app
EXPOSE 5173

# Start the client app
CMD [ "yarn", "dev" ]