FROM node:latest
ARG DISCORD_BOT_TOKEN
ENV DISCORD_BOT_TOKEN=${DISCORD_BOT_TOKEN}
WORKDIR /bot
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
CMD ["yarn", "start"]
