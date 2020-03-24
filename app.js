const app = () => {
    const sendMessage = require('./sendMessage')
    const { MESSAGE } = process.env
    sendMessage(MESSAGE)
}

module.exports = app