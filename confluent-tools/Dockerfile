FROM sshtel/busybox-custom

WORKDIR /app

USER root

RUN apk update
RUN apk add bash
RUN apk add openjdk11
RUN curl -O http://packages.confluent.io/archive/7.0/confluent-7.0.1.tar.gz
RUN tar -zxf confluent-7.0.1.tar.gz
RUN export PATH=$PATH:/app/confluent-7.0.1/bin/
RUN rm -f confluent-7.0.1.tar.gz
