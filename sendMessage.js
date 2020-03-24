const axios = require('axios')

const { SLACK_WEB_HOOK_URL } = process.env

const sendMessage = async message => {
    await axios.post(SLACK_WEB_HOOK_URL, { "text": message })
}

module.exports = sendMessage