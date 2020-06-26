
const Discord = require('discord.js');
const emo = require('../emoji.json');
const szinek = require('../color.json');
const moment = require('moment')
exports.run = async (bot, message, args, prefix) =>
{ 
    let y = process.openStdin()
    y.addListener("data", res => {
        let x = res.toString().trim().split(/ +/g)
        kliens.channels.get('705091382108225547').send(x.join(" "));
    });
};