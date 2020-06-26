const Discord = require('discord.js');
exports.run = async (bot, message, args) =>{ 

    if (message.author.id != '575342593630797825') return message.channel.send('Nincs Jogosultságod a használatára!')

    try {
        await message.channel.send('A bot le áll!')
        process.exit()
    } catch(e) {
        message.channel.send(`HIBA: ${e.message}`)
    }





};



module.exports.config = {
    name: 'stop',
    description: 'le állítja a bot ot!',
    usage: '?stop',
    accessableby: 'Bot Owner',
    aliases: ["botstop"]
}