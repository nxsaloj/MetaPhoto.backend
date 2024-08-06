#!/bin/bash

set -o errexit
BASEDIR="$1"

echo "${BASEDIR}" > /BASEDIR

sam build --parameter-overrides BucketBuild=/home/app
sam local start-api \
    --docker-volume-basedir "${BASEDIR}/.aws-sam/build" \
    --container-host "host.docker.internal" \
    --host 0.0.0.0 \
    --container-host-interface 0.0.0.0