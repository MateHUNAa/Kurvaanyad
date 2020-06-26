const Discord = require('discord.js');
const { RichEmbed } = require('discord.js')
exports.run = async (bot, message, args, prefix, moment) =>
{ 

    let user = message.mentions.users.first() ||message.author
    let msg = message;

    let Avatar = new RichEmbed()
    .setTitle(`${user.tag} Itt az avatárod :D `)
    .setURL(user.displayAvatarURL)
    .setImage(user.displayAvatarURL)
    .setColor("#25C675")
    msg.channel.send(Avatar)


};

