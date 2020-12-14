const Commando = require('discord.js-commando')
const _ = require('lodash')

module.exports = class WikiCommand extends Commando.Command {
  constructor (client) {
    super(client, {
      name: 'wiki',
      description: 'Gets wiki entries for each entity'
    })
  }

  async run (message, args) {
    const entity = args.slice(1).join(' ')
    message.channel.send(
      `Paimon doesn't know what ${_.startCase(_.toLower(entity))} is`
    )
  }
}
