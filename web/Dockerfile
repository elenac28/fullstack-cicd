# Build step
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Tell Vite where the API will be in prod (can override with --build-arg)
ARG VITE_API_URL=http://api:8080
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build

# Serve static files
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
