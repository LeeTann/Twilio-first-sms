require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN;

const client = require('twilio')(accountSid, authToken)

client.messages.create({
    to: process.env.MY_PHONE_NUMBER,
    from: '+18582521716',
    body: 'This is the ship that made the Kessel Run in 14 parsecs?'
})
.then(message => console.log(message.sid))