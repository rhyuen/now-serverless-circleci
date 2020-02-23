FROM node:13.8.0-alpine AS baseimage
MAINTAINER rhyuen
COPY package.json package.json
RUN npm install
COPY . .
EXPOSE 9911
RUN npm start