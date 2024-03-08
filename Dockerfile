# Use the official Node.js image as the base image
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Angular app for production
RUN node_modules/.bin/ng build --configuration production

# Use a smaller, production-ready image as the final image
FROM nginx:alpine

# Set the working directory to NGINX web server directory
WORKDIR /usr/share/nginx/html

# Remove the default NGINX static files
RUN rm -rf ./*

# Copy the production-ready Angular app to the Nginx webserver's root directory
COPY --from=build /app/dist/jira-sdlc-bot-fe .

# Create a custom NGINX configuration file
RUN echo "server { listen 8000; server_name localhost; location / { root /usr/share/nginx/html; index index.html; try_files \$uri \$uri/ /index.html =404; } }" > /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 8000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]