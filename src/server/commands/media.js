const { DiscordAPIError } = require('discord.js');
const { mediaStatus } = require('../consts');

module.exports = {
  name: 'media',
  description: 'Toggle channel and content stream of Genshin Impact media on or off',
  async execute(message, args) {
    const status = args[1];
    const server = message.guild;
    const channelManager = server.channels;
    if (status === mediaStatus.ON) {
      const channelNameArg = args[2];
      const targetChannel = channelManager.cache.find(channel => channel.name === channelNameArg);
      if (targetChannel) {
        message.channel.send(`found channel "${targetChannel}"`);
        // db add targetChannel ID (pk) | guild ID | targetChannel name
        // open connection (websocket?) between master announcement channel and consumer channel
        message.channel.send(`Subscribed text channel ${targetChannel} to media updates`);
      } else {
        message.channel.send(`error: did not find channel "${channelNameArg}"`);
      }
    } else if (status === mediaStatus.OFF) {
      // db remove entry with guild ID key
    } else {
      message.channel.send(`Error: unknown argument '${status}'`);
    }
  },
};
