require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

client.on('message', (message) => {
  if (!message.content.startsWith(process.env.PREFIX)) {
    return;
  }
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
  const command = args[0].toLowerCase();

  if (command === 'build') {
    const character = capitalize(args[1]);
    message.channel.send(`Paimon thinks you should use Waster Greatsword with a 4-piece Retracting Bolide set on ${character}`);
  }
});
