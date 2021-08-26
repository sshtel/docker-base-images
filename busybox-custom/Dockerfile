FROM alpine

WORKDIR /app

ENV PORT=8080

USER root

RUN apk update
RUN apk add nodejs
RUN apk add npm
RUN apk add curl
RUN apk add tcpdump
RUN apk add bind-tools
RUN apk add openssh

COPY /server/app.js /app/
COPY /server/package.json /app/
RUN npm i

RUN echo ${PORT}

ENTRYPOINT [ "npm", "run", "start" ]