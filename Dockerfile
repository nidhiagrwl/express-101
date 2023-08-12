# Use the official Node.js image as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your Express.js app is listening on
EXPOSE 4000

# Command to start the application
CMD ["node", "main.js"]  # Replace "app.js" with your main application file
