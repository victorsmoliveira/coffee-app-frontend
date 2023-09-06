# First stage: Node.js builder
FROM node:16 as builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Second stage: Production image
FROM nginx:1.25-alpine

# Copy built app from the first stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf
