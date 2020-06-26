const Discord = require('discord.js');
const emo = require('../emoji.json');
const szinek = require('../color.json');
const moment = require('moment')
exports.run = async (bot, message, args, prefix) =>
{ 
      const serverembed = new Discord.RichEmbed()
      .setTitle("Szerver információ")
      .setColor(szinek.világos_zöld)
      .setThumbnail("https://i.pinimg.com/originals/38/08/b4/3808b458f7a0cd3ab88f6c653b290b61.gif")
      .addField("**Szerver név:**",`**${message.guild.name}**`, true)
      .addField("**Szerver tulajdonos:**", `**${message.guild.owner.user.tag}**`, true)
      .addField("**Regio:**", `**${message.guild.region}**`)
      .addField("**Létszám:**", `__**Total Members:**__  **${message.guild.memberCount}** \n __**members:**__ **${message.guild.members.filter(m => !m.user.bot).size}** \n __**Botok:**__ **${message.guild.members.filter(m => m.user.bot).size}**`);
      message.channel.send(serverembed);
};
