FROM node:18.20.4

RUN apt upgrade

WORKDIR /home/app
COPY package.json package-lock.json* ./

RUN npm install

COPY . .

ENTRYPOINT [ "npm","run","awake" ]