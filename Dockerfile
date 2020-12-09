FROM node:latest
WORKDIR /bot
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
CMD ["yarn", "start"]
