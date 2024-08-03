FROM node:20.15.1

RUN apt upgrade

WORKDIR /home/app
COPY package.json package-lock.json* ./

RUN npm install

COPY . .

ENTRYPOINT [ "npm","run","awake" ]