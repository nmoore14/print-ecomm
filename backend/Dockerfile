FROM debian:lastest

RUN apt-get udpate && apt-get install -qq -y \
    shellcheck \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app/

COPY . /usr/src/app/
