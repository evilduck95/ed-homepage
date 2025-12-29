#!/bin/bash

docker build -t ed-homepage .
docker run -d --name ed-homepage --restart always -p 8001:8080 ed-homepage
