const Discord = require('discord.js');
const emo = require('../emoji.json');
const szinek = require('../color.json');
const moment = require('moment')
moment.locale('hu')
exports.run = async (bot, message, args, prefix) =>
{ 

    if (!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.reply('Nem használhatod ezt a parancsot!')

     if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.reply('Nem tudom le mutelni őt!')

    let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!mutee) return message.reply('Kérlek jelölj meg valakit!')

    let reson = args.slice(1).join(" ");
    if(!reson) reson = "Nincs indok!"

    let muterole = message.guild.roles.find(r => r.name === 'Muted')
    if(!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: 'Muted',
                color: '#514f48',
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGE: false,
                    ADD_REACTIONS: false,
                    SEND_TTS_MESSAGE: false,
                    ATTACH_FILES: false,
                    SPEAK: false
                })
            })
        }  catch(e) {
            console.log(e.stack)
        }
    }

    mutee.addRole(muterole.id).then(() => {
        message.delete()
        mutee.send(`le lettél némítva! Ezért: ${reson}`)
        message.channel.send(`${mutee.user.username} Sikeressen le muteolva`)
    })

    let embed = new Discord.RichEmbed()
    .setColor(szinek.sötét_piros)
    .setAuthor(`${message.guild.name} ModLogs`, message.guild.iconURL)
    .addField('muteolva: ', mutee.user.username)
    .addField('Moderátor: ', message.author.username)
    .addField('Date: ', moment().format('LTS'))

    let sChannel = message.guild.channels.find(c => c.id === '626769319686307841')
    sChannel.send(embed)

};
