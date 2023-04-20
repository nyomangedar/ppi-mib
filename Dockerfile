#NODE IMAGE
FROM node:16

#WORKDIR PATH
WORKDIR /usr/src/app

#DEPENDENCIES
COPY . .

RUN npm install

RUN cd frontend-app && npm install && npm run build

EXPOSE 3500