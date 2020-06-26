const Discord = require('discord.js');
const emo = require('../emoji.json');
const szinek = require('../color.json');
const moment = require('moment')
exports.run = async (bot, message, args, prefix) =>
{ 
  const botembed = new Discord.RichEmbed()
  .setTitle("Bot információ")
  .setColor("#25C675")
  .setThumbnail("https://i.pinimg.com/originals/38/08/b4/3808b458f7a0cd3ab88f6c653b290b61.gif")
  .addField("Bot név:", bot.user.username)
  .addField("Bot létrehozásának a napja:", moment(bot.user.createdAt).format('YYYY MMMM H:mm:s'))
  .addField("Ennyi szerveren vagyok benn:", bot.guilds.size)
  message.channel.send(botembed);
};
