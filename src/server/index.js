const Discord = require('discord.js')
const Commando = require('discord.js-commando')
const path = require('path')
const requireDir = require('require-dir')
const config = require('./config.json')
require('dotenv').config()

//const commands = requireDir('./commands')

const client = new Commando.CommandoClient({
  owner: '188870878426169344',
  commandPrefix: config.prefix
})

// Register available commands to Discord bot
//client.commands = new Discord.Collection()
//Object.values(commands).forEach(command => client.commands.set(command.name, command))

if (process.env.NODE_ENV === 'production') {
  client.login(process.env.DISCORD_BOT_TOKEN)
} else {
  client.login(process.env.DISCORD_BOT_DEV_TOKEN)
}

client.on('ready', async () => {
  client.registry
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'commands'))
  // client.channels.fetch('785804443005747214').then(channel => channel.send('success: lookup channel and send message'))
})

// Listen for command invocations
client.on('message', message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return

  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/)
  const commandName = args[0].toLowerCase()

  if (!client.commands.has(commandName)) return

  const command = client.commands.get(commandName)
  try {
    command.execute(message, args)
  } catch (err) {
    console.error(err)
    message.channel.send(`Error executing command ${command}`)
  }
})
