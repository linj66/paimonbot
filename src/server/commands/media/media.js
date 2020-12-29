const Commando = require('discord.js-commando')
const { MediaChannels } = require('../../db/MongoConnection')
const { mediaStatus } = require('../consts')


module.exports = class MediaCommand extends Commando.Command {
  constructor (client) {
    super(client, {
      name: 'media',
      description: 'Toggle consumption of Genshin Impact content stream',
      group: 'media', 
      memberName: 'media',
      argsType: 'multiple',
      argsCount: 2
    })
  }

  async run (message, args) {
    const status = args[0]
    const server = message.guild
    const channelManager = server.channels
    const channelNameArg = args[1]
    const targetChannel = channelManager.cache.find(
      channel => channel.name === channelNameArg
    )

    if (!targetChannel) {
      message.channel.send(`error: did not find channel "${channelNameArg}"`)
    }

    if (status === mediaStatus.ON) {
      message.channel.send(`found channel ${targetChannel}`)
      const channelInfo = { 
        channelId: targetChannel.id,
        channelName: targetChannel.name,
        guildId: targetChannel.guild.id
      }
      try {
        const result = await MediaChannels.addChannel(channelInfo)
        console.log(`${channelInfo} inserted with _id: ${result.insertedId}`)
        message.channel.send(
          `Subscribed text channel ${targetChannel} to media updates`
        )
      } catch (err) {
        console.error(err)
        message.channel.send(
          `Error subscribing text channel ${targetChannel} to media updates`
        )
      }
    } else if (status === mediaStatus.OFF) {
      // db remove entry with guild ID key
      try {
        const result = await MediaChannels.deleteChannel(targetChannel.id)
        if (result.deletedCount === 1) {
          console.log(`removed channel ${targetChannel.id}`)
          message.channel.send(
            `Unsubscribed text channel ${targetChannel} to media updates`
          )
        } else {
          console.log(`no documents matched remove query for channel ${targetChannel.id}`)
          message.channel.send(`Error: Channel ${targetChannel} was not subscribed to updates`)
        }
      } catch (err) {
        console.error(err)
        message.channel.send(
          `Error unsubscribing text channel ${targetChannel} to media updates`
        )
      }
    } else {
      message.channel.send(`Error: unknown argument '${status}'`)
    }
  }
}
