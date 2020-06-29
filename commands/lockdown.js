const Discord = require('discord.js');
const emo = require('../emoji.json');
const szinek = require('../color.json');
const moment = require('moment')
const ms = require('ms')
exports.run = async (bot, message, args, prefix) =>
{ 


    if (message.author.id !== '575342593630797825') return message.channel.send(message.author.toString() + '\` Nincs jogosultságod a használatára!\`')

    if(!bot.lockit) bot.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'unlock'];
    if (!time) return message.channel.send('\`Adj meg egy időt ameddig le legyen zárva a szoba!\`')

    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
        }).then(() => {
            message.channel.send('\`lezárás feloldása!\`');
            clearTimeout(bot.lockit[message.channel.id]);
            delete bot.lockit[message.channel.id];
        }).catch(e => {
            console.log(e)
        });
    } else {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
            message.channel.send(`\`A szoba le lett zárva: ${ms(ms(time), {long:true})} -ig \``).then(()=> {
                bot.lockit[message.channel.id] = setTimeout(()=> {
                    message.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: null
                    }).then(message.channel.send('\`Szoba Már nincs le zárva!\`')).catch(console.error);
                    delete bot.lockit[message.channel.id];
                }, ms(time));
            
            }).catch(error => {
                console.log(error)
            })
        })
    }



};
