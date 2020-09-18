FROM alpine

WORKDIR /app

USER root

RUN apk add nodejs
RUN apk add npm
RUN apk add curl
RUN apk add tcpdump


COPY /server/app.js /app/
COPY /server/package.json /app/
RUN npm i

ENTRYPOINT [ "node", "app.js" ]