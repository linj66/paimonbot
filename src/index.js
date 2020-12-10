const requireDir = require('require-dir');
const Discord = require('discord.js');
const { prefix } = require('../config.json');

const commands = requireDir('./commands');

const client = new Discord.Client();

client.commands = new Discord.Collection();
Object.values(commands).forEach(command => client.commands.set(command.name, command));

client.login(process.env.DISCORD_BOT_TOKEN);

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args[0].toLowerCase();

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);
  try {
    command.execute(message, args);
  } catch (err) {
    console.error(err);
    message.channel.send(`Error executing command ${command}`);
  }
});
