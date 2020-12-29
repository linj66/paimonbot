const { MongoClient } = require('mongodb')
const MediaChannels = require('./MediaChannels')

class MongoConnection {

  #url = 'mongodb://paimonbot-mongo:27017'
  #dbName = 'paimondb'
  
  constructor() {
    this.client = new MongoClient(this.#url)
  }

  async init() {
    await this.client.connect()
    console.log('mongodb connected')

    this.db = this.client.db(this.#dbName)
    this.MediaChannels = new MediaChannels(this.db)
  }
}

module.exports = new MongoConnection()