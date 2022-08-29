const Discord = require("discord.js");
const get = require("request")
exports.run = async (client, message, args) => {
let soru = args.join(' ');
if(!soru) return message.reply('Ne Konuşacağız?')
let encodedsoru = encodeURI(soru)
get(`https://api.codare.fun/sor/${encodedsoru}`, async function (err, resp, body) { 
body = JSON.parse(body); 
if(err) return message.channel.send('Hata Oluştu Tekrar Denemelisin.')
message.channel.send(body.cevap)
    }) 
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sor","sohbet"],
  permLevel: 0
};

exports.help = {
  name: "sohbet",
  description: "botla konuşursunuz",
  usage: "sohbet",
};