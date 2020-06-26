const Discord = require('discord.js');
const emo = require('../emoji.json');
const szinek = require('../color.json');
exports.run = async (bot, message, args, prefix, moment) =>
{ 

    if (message.author.id != '575342593630797825') return message.channel.send('Nincs Jogosultságod a használatára!')

    try{
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch(e) {
        return message.channel.send(`Nem lehet újratölteni: ${args[0]} -t`);
    }

    message.channel.send(`Sikeres újratöltés: ${args[0]}`);


};



module.exports.config = {
    name: 'stop',
    description: 'le állítja a bot ot!',
    usage: '?stop',
    accessableby: 'Bot Owner',
    aliases: ["botstop"]
}
