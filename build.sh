#!/bin/bash

docker build -t ed-homepage .
docker run -d --name ed-homepage -p 8001:80 ed-homepage