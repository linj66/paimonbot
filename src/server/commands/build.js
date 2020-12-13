const _ = require('lodash');

module.exports = {
  name: 'build',
  description: 'Builds for each character',
  execute(message, args) {
    const character = args[1];
    message.channel.send(`Paimon doesn't know what the best build is for ${_.startCase(_.toLower(character))}`);
  },
};
