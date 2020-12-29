class MediaChannel {
  constructor(db) {
    this.collection = db.collection('media_channels')
  }

  async addChannel(channel) {
    return await this.collection.insertOne(channel)
  }

  async deleteChannel(channelId) {
    return await this.collection.deleteOne({ channelId: channelId })
  }
}

module.exports = MediaChannel