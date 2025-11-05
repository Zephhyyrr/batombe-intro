FROM node:22.16.0 AS builder
WORKDIR /app

# Install dependencies and build the app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22.16.0 AS runner
WORKDIR /app

# Only install production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy build output and public assets from the builder stage
COPY --from=builder /app/.output .output
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
