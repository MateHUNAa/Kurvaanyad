const Discord = require('discord.js');
const emo = require('../emoji.json');
const szinek = require('../color.json');
const moment = require('moment')
exports.run = async (bot, message, args, prefix) =>
{ 
          const uembed = new Discord.RichEmbed()
          .setColor(szinek.világos_kék)
          .setTitle("User Info")
          .setThumbnail(message.author.displayAvatarURL)
          .setAuthor(`${message.author.username} Info: `, message.author.displayAvatarURL)
          .addField("**UserName:**", `${message.author.username}`, true)
          .addField("**#ID:**", `${message.author.discriminator}`, true)
          .addField("**DevID:**", `${message.author.id}`, true)
          .addField("**SztátUsZ:**", `${message.author.presence.status}`, true)
          .addField("**Created At:**", `${moment(message.author.createdAt).format('YYYY, MMMM, hh:mm:ss')}`, true)
          .setFooter(`${bot.user.username} | Creator: !/Mééz\!MateHUN!/Mééz\!`, bot.user.displayAvatarURL);
          message.channel.send({embed: uembed});
};