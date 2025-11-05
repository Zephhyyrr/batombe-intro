# Tahap 1: Builder
# Menggunakan base image node versi 22 yang ringan (alpine)
FROM node:22-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy sisa source code dan build aplikasi
COPY . .
RUN npm run build

# ---

# Tahap 2: Runner
# Mulai dari base image yang sama
FROM node:22-alpine AS runner
WORKDIR /app

# Hanya install production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy HANYA build output dari builder stage
# .output sudah berisi semua yang dibutuhkan, termasuk aset publik
COPY --from=builder /app/.output .output

# BARIS INI DIHAPUS:
# COPY --from=builder /app/public ./public <-- INI SUMBER ERROR

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]