// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// async function allMedia() {
//     const messages = await client.messages.list({to: 'whatsapp:+14155238886'});
//     for(message of messages) {
//         const pics = await message.media().list();
//         console.log(pics)
//         for(pic of pics)
//             if(pic)
//                 console.log("Pic" + pic.uri);
//     }
// }
// allMedia()
//     .catch((err) => console.error(err));


//Eliminar todo o conteúdo
async function deleteAllMessages() {
    const messages = await client.messages.list();
    for(message of messages) {
        console.warn(`Deleting ${message.sid}`)
        message.remove();
    }
}


deleteAllMessages() 
    .then(() => console.log("DONE"))
    .catch((err) => console.error(err))