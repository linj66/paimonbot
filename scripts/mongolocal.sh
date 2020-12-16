docker stop mongolocal
docker rm mongolocal
docker run --name mongolocal -d -p 27017:27017 mongo
docker ps
