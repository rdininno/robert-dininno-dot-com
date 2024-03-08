# syntax=docker/dockerfile:1

# Use node image for the base image for all stages.
ARG NODE_VERSION=16.14.2
FROM node:${NODE_VERSION}-alpine

# Set working directory for all build stages.
WORKDIR /usr/src/app

# Install production dependencies.
# Copying package.json and package-lock.json and installing dependencies.
COPY package*.json ./
RUN npm ci --only=production

# Copying the rest of the source files into the image.
COPY . .

# Building the application.
RUN npm run build

# Expose the port that the server listens on
EXPOSE 3001

# Command to run the server
CMD ["node", "src/server.js"]
