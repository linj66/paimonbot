const Commando = require('discord.js-commando')
const _ = require('lodash')

module.exports = class BuildCommand extends Commando.Command {
  constructor (client) {
    super(client, {
      name: 'build',
      description: 'Gets builds for a character',
      group: 'utils',
      memberName: 'build'
    })
  }

  async run (message, args) {
    const character = args
    message.channel.send(
      `Paimon doesn't know what the best build is for ${_.startCase(
        character.toLowerCase()
      )}`
    )
  }
}
