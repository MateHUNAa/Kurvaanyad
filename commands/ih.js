const Discord = require('discord.js');
exports.run = async (bot, message, args, prefix, moment) =>
{ 

    {
        if (!message.content.startsWith(prefix)) return;
            
        var veletlen = [
            "Igaz",
            "Hamis",
        ];

        if (args[1], message.channel.send(veletlen[Math.floor(Math.random() * veletlen.length)] + " " + message.author.toString()));
        else message.channel.send("használat !ih (kérdés) a bottol random választ fogsz kapni")
        return;
    }



};



module.exports.config = {
    name: 'ih',
    description: 'Igaz Hamis!',
    usage: '?ih',
    accessableby: 'Member',
    aliases: ["IgazHamis"]
}
