docker rm -f paimonbot-local-container
cd src/server
docker build -t paimonbot-local-image .
docker run -d --name paimonbot-local-container --env-file .env paimonbot-local-image
