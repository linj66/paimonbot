const _ = require('lodash')

module.exports = {
  name: 'wiki',
  description: 'Wiki entries for each entity',
  execute (message, args) {
    const entity = args.slice(1).join(' ')
    message.channel.send(
      `Paimon doesn't know what ${_.startCase(_.toLower(entity))} is`
    )
  }
}
