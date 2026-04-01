FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration production

FROM nginx:1.27-alpine

ARG BACKEND_URL
ENV BACKEND_URL=${BACKEND_URL}

RUN apk add --no-cache gettext

COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist/divara-craft-frontend /usr/share/nginx/html

EXPOSE 8080

CMD ["/bin/sh", "-c", "envsubst '$BACKEND_URL' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]