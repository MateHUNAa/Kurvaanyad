const Discord = require('discord.js');
const emo = require('../emoji.json');
const szinek = require('../color.json');
const moment = require('moment')
var figlet = require('figlet')
exports.run = async (bot, message, args, prefix) =>
{ 
    if(!args.join(' ')) {
        message.delete()
        return message.channel.send('Adj meg egy szöveget').then(r => r.delete(3000))
    }
    figlet.text(args.join(' '), {
        font: 'Big',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 1000,
        whitespaceBreak: true
    }, function(err, data) {
        if(err) return console.dir(err)
        message.channel.send(data, {
            code: 'mb'
        })
})
}