const Discord = require("discord.js")
exports.run = async (client, message, args) => {

let durum = new Discord.MessageEmbed()
.setColor(`#5865f2`)
.setImage("https://img.fanatik.com.tr/img/75/1200x695/5ea41a6666a97c63749ca6ab.jpg")
.setAuthor(message.author.username,"https://img.fanatik.com.tr/img/75/1200x695/5ea41a6666a97c63749ca6ab.jpg")
.setDescription(`:tada: Dürümü yedin hayırlı olsun! `)

   if(args[0] || !args[0]) return message.channel.send(durum)

};

  

  exports.help = {
    name:"dürüm",
    usage:"dürüm",
    description:"dürüm yersiniz."
    }
    
    exports.conf = {
    aliase:[],
    kategori:"genel"
    }