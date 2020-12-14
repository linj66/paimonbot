const _ = require('lodash')
const Commando = require('discord.js-commando')

module.exports = class BuildCommand extends Commando.Command {
  constructor (client) {
    super(client, {
      name: 'build',
      description: 'Gets builds for a character'
    })
  }

  async run (message, args) {}
}

/*{
  name: 'build',
  description: 'Builds for each character',
  execute(message, args) {
    const character = args[1]
    message.channel.send(`Paimon doesn't know what the best build is for ${_.startCase(_.toLower(character))}`)
  },
}*/
