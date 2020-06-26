const moment = require('moment')
const discord = require('discord.js')
exports.run = async (bot, message, args) =>{ 
    moment.locale('hu')
    const ido = new discord.RichEmbed()
    .setTitle(moment().format('LLLL:ss'))
    .setFooter(moment().format('hh:mm:ss'), bot.user.displayAvatarURL)
    message.channel.send(ido).then(async msg => {
            await msg.react("✅");
            await msg.react("❌");
            message.delete();
            return;
    })
};