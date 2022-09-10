const db = require("quick.db");
const date = require('date-and-time');

const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json");

const disbut = require("discord-buttons")
let prefix = ayarlar.prefix;



exports.run = function(client, message, args) {
  let kisi = message.guild.members.cache.get(message.author.id);
let kisiisim = kisi.displayName;

  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()
  .setColor(`#5865f2`) 
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`<:red:1009441398224855063>  Afk sebebini giriniz! **(a!afk <sebep>)**`)
  if(!REASON) return message.channel.send(embed)
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  const afk = new Discord.MessageEmbed()
  .setColor(`#5865f2`) 
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`<:evet:1009441379576983652> :hourglass: **AFK** sebebin **${REASON}** olarak ayarlandı.`)
  let destek = new disbut.MessageButton()
  .setStyle('url')
  .setEmoji('<<:partner:963413660909305927> ')
  .setLabel('Destek Sunucusu')
.setURL("https://discord.gg/AKbAEfEAam");
  message.channel.send(afk,destek);
  message.react("<:okeee:981900426590957598>"); 
  message.member.setNickname(`AFK ` + kisiisim);

  
 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'afk',
  description: 'afk komutu',
  usage: 'afk'
};
