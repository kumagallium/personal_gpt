FROM node:18
WORKDIR /code

RUN apt update && apt install -y python make g++
RUN npm install -g npm 

COPY /personal_gpt/package*.json ./
RUN npm install

COPY ./personal_gpt .

EXPOSE 3000
ENV HOST 0.0.0.0