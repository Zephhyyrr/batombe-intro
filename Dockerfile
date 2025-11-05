FROM node:18-alpine
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --silent

# Salin semua file
COPY . .

# Build aplikasi
RUN npm run build --if-present

EXPOSE 3000
CMD ["npm", "run", "build"]
