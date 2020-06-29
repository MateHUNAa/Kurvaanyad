const Discord = require('discord.js');
const emo = require('../emoji.json');
const szinek = require('../color.json');
const moment = require('moment')
//
exports.run = async (bot, message, args, prefix) =>
{ 
    if (message.author.id != '575342593630797825') return message.channel.send('Nincs Jogosultságod a használatára!')

    message.channel.send('Szerver törlése!')



};
