'use strict'
const WaveHandler = require('./waveHandler')
const { fillPackageWithParameter } = require('../utils/packageHelper')
const { join, parse, sep } = require('path')

const BOT_TYPE = 'Bot'
const BOT_EXTENSION = 'bot'

class BotHandler extends WaveHandler {
  _getElementName() {
    const parsedPath = this._getParsedPath()
    const elementName = new Set([
      parsedPath.dir.split(sep).pop(),
      parsedPath.name,
    ])
    return [...elementName].join('.')
  }
  async handleAddition() {
    await super.handleAddition()

    const botName = this._getParsedPath().dir.split(sep).pop()
    fillPackageWithParameter({
      package: this.diffs.package,
      type: BOT_TYPE,
      elementName: botName,
    })

    const botPath = `${parse(this.line).dir}${sep}${botName}.${BOT_EXTENSION}`
    const source = join(this.config.repo, botPath)
    const target = join(this.config.output, botPath)

    await this._copyWithMetaFile(source, target)
  }
}

module.exports = BotHandler
