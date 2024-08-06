FROM python:alpine
RUN apk update && \
    apk upgrade && \
    apk add bash && \
    apk add npm && \
    apk add --no-cache --virtual build-deps build-base gcc && \
    pip install aws-sam-cli && \
    apk del build-deps && \
    npm i -g esbuild
RUN mkdir /home/app
WORKDIR /home/app
EXPOSE 3000
ENTRYPOINT ["sh", "scripts/entrypoint.sh"]