const Commando = require('discord.js-commando')
const path = require('path')
const mongo = require('./db/MongoConnection')
const config = require('./config.json')
require('dotenv').config()

const client = new Commando.CommandoClient({
  owner: process.env.DISCORD_BOT_OWNER_ID.toString(),
  commandPrefix: config.prefix
})

async function mongoInit() {
  await mongo.init()
}
mongoInit()

client.on('ready', async () => {
  client.registry
    .registerGroups(['utils', 'media', 'games'])
    .registerCommandsIn(path.join(__dirname, 'commands'))
  // client.channels.fetch('785804443005747214').then(channel => channel.send('success: lookup channel and send message'))
})

if (process.env.NODE_ENV === 'production') {
  client.login(process.env.DISCORD_BOT_TOKEN)
} else {
  client.login(process.env.DISCORD_BOT_DEV_TOKEN)
}
