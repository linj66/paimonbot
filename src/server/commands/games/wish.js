const Commando = require('discord.js-commando')

module.exports = class WishCommand extends Commando.Command {
  constructor (client) {
    super(client, {
      name: 'wish',
      description: 'Wish simulator',
      group: 'games',
      memberName: 'wish'
    })
  }

  async run (message) {
    message.channel.send('Wish simulator has yet to be implemented.')
  }
}