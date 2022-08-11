# FROM node:alpine AS supermarket-build
# WORKDIR /app
# COPY . .
# RUN npm ci && npm run build

# FROM nginx:alpine
# COPY --from=supermarket-build /app/dist/supermarket-frontend /usr/share/nginx/html
# EXPOSE 80

# FROM nginx:alpine
# COPY /dist/supermarket-frontend /usr/share/nginx/html
# EXPOSE 80

FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200 49153
CMD npm run start