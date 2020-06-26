const Discord = require('discord.js');
const emo = require('../emoji.json');
const szinek = require('../color.json');
const moment = require('moment')
exports.run = async (bot, message, args, prefix) =>
{ 

    let uptimesec = (bot.uptime / 3600);
    let uptimehours = Math.floor(uptimesec / 3600);
    let uptimeDays = Math.floor(uptimesec / 86400);

    uptimesec %= 3600;

    let uptimeMins = Math.floor(uptimesec / 60);
    let uptimeSecTotal = Number.parseInt(uptimesec % 60);

    const sec = `${uptimeSecTotal} másodperc`;
    const min = `${uptimeMins} perc`;
    const hour = `${uptimehours} óra`;
    const days = `${uptimeDays} nap`;

    let embed = new Discord.RichEmbed()
    .setTitle('🕛Bot Uptime🕛')
    .setDescription(`${uptimeDays?days:''} ${uptimehours?hour:''} ${uptimeMins?min:''} ${uptimeSecTotal?sec:''}`)
    .setColor(szinek.aqua)
    message.channel.send(embed).catch(console.error)

};
