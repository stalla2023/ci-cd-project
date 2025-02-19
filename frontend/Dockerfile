# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Build the frontend
RUN npm run build

# Expose port
EXPOSE 5173

# Start the frontend
CMD ["npm", "run", "preview"]
