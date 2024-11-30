FROM node:18-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install -f

# Bundle app source
COPY . .

# Set environment variable to limit worker threads
ENV UV_THREADPOOL_SIZE=2

# Expose port
EXPOSE 8080

# Command to run the app in production mode
CMD ["npm", "run", "prod"]
