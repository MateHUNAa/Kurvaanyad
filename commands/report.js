
const Discord = require('discord.js');
const emo = require('../emoji.json');
const szinek = require('../color.json');
const moment = require('moment')
exports.run = async (bot, message, args, prefix) =>
{ 


        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
      /*
        let messageArray = message.content.split(" ")
        let cmd = messageArray[0]
        let args = messageArray.slice(1);
      */

          let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
          if(!rUser) return message.channelsend("Nem talált felhasználó!");
          let reson = args.join(" ").slice(22);
      
          let reportEmbed = new Discord.RichEmbed()
          .setDescription("Reports")
          .setColor(szinek.világos_piros)
          .addField('Reportólt user ', `${rUser} ID: ${rUser.id}`)
          .addField('reportot küldte: ', `${message.author} ID: ${rUser.id}`)
          .addField('Time: ', moment().format('YYYY, MMMM, hh:mm:ss'))
          .addField('Indok: ', reson)
          let repch = message.guild.channels.find(channel => channel.name === 'reportlog')
          message.channel.send(`${message.author.toString()} Reportodat el küldtük!`)
          repch.send(reportEmbed).then(async message => {
            await message.react(emo.mute);
            await message.react(emo.ban);
            await message.react(emo.unban);
          })
};