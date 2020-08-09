const Discord = require('discord.js');
const emo = require('../emoji.json');
const colors = require('../color.json');
const moment = require('moment')
exports.run = async (bot, message, args, prefix) =>
{ 

    if (!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.reply('Nem használhatod ezt a parancsot!')

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.reply('Nem tudom le unmute őt!')





    message.guild.me.hasPermission()

    let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!mutee) return message.reply('Kérlek jelölj meg valakit!')

    let reson = args.slice(1).join(" ");
    if(!reson) reson = "Nincs indok!"

    let muterole = message.guild.roles.find(r => r.name === 'Muted')
    if(!muterole) return message.reply('Nincs rang amit el lehetne tőle venni!')



    mutee.removeRole(muterole.id).then(() => {
        message.delete()
        mutee.send(`Un muteolva lettél!`).catch(err => console.log(err))
        message.channel.send(`${mutee.user.username} Unmuteolva lett!`)
    })

    let embed = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(`${message.guild.name} ModLogs`, message.guild.iconURL)
    .addField('muteolva: ', mutee.user.username)
    .addField('Moderátor: ', message.author.username)
    .addField('Date: ', moment().format('LTS'))

    let sChannel = message.guild.channels.find(c => c.id === '626769319686307841')
    sChannel.send(embed)

};
