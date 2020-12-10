FROM node:latest
ENV NODE_ENV=production
WORKDIR /bot
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
CMD ["yarn", "start"]
