# Use an official Node.js runtime as a base image
FROM node:14-alpine as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Copy the .env file to the working directory
COPY .env .env

# Build the Nest.js application
RUN npm run build

# Create a new lightweight image for production
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the built application from the builder image
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/.env /app/.env

# Expose the port that the application will run on
EXPOSE 3001

# Start the Nest.js application
CMD ["npm", "run", "start"]