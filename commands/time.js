
const Discord = require('discord.js');
const emo = require('../emoji.json');
const szinek = require('../color.json');
const moment = require('moment')
exports.run = async (bot, message, args, prefix) =>
{

    const sTime = new Discord.RichEmbed()
    .setTitle(moment().format('YYYY, MMMM, hh:mm:ss'))
    .addField("Pontos idő?:", "Év: " + moment().format("YYYY") + "\n" + "Hónap: " + moment().format("MMMM") + "\n" + moment().format("hh:mm:ss") )
    .addField("Nap vegéig még: ", moment().endOf('day').fromNow())
    .addField("Minden egyben ??? ", moment().format('LLLL'))
    message.channel.send(sTime)

};
