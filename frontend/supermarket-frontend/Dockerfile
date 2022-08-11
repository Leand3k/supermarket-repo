FROM node:alpine AS supermarket-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=supermarket-build /app/dist/supermarket-frontend /usr/share/nginx/html
EXPOSE 80