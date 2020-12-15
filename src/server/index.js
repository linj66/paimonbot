const Commando = require('discord.js-commando')
const path = require('path')
const config = require('./config.json')
require('dotenv').config()

const client = new Commando.CommandoClient({
  owner: '188870878426169344',
  commandPrefix: config.prefix
})

client.on('ready', async () => {
  client.registry
    .registerGroups(['utils', 'media', 'games'])
    .registerCommandsIn(path.join(__dirname, 'commands'))
  // client.channels.fetch('785804443005747214').then(channel => channel.send('success: lookup channel and send message'))

  console.log(client.registry.commands)
})

if (process.env.NODE_ENV === 'production') {
  client.login(process.env.DISCORD_BOT_TOKEN)
} else {
  client.login(process.env.DISCORD_BOT_DEV_TOKEN)
}
