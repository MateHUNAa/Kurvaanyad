const discord = require('discord.js');
const emo = require('../emoji.json');
const szinek = require('../color.json');
exports.run = async (bot, message, args, prefix, moment) =>
{ 

    let embed = new discord.RichEmbed()
        .setThumbnail("https://i.pinimg.com/originals/38/08/b4/3808b458f7a0cd3ab88f6c653b290b61.gif ")
        .setTitle('Parancs lista :')
        .setColor(3447003)
        .addField("**?ih kérdés**", " Igaz Hamis ||| A Bot Csak [Igaz] és [Hamis] választ ad.")
        .addField("**?ido**", "Meg mondja a pontos időt!")
        .addField("**?parancsok**", "Ez a lista")
        .addField("**?Version**", "A bot nak a Verziói és fejlesztési napló!")
        .addField("**?in Kérdés**", "Igen Nem ||| A Bot Csak [Igen] és [Nem] választ ad.")
        .addField("**?avatar**", "El küldi a bot az avatárod :D")
        .addField("**?botinfo**", "meg mutatja a bot infokat")
        .addField("**?report @player indok**", "Egyszerü report!")
        .addField("**?serverinfo**", `${emo[":D"]} meg mutatja a szerver infokat/adatokat ${emo[":D"]}`)
        .addField("**?userinfo**", `meg mutatja az adataid `)
        .addField('**?uptime**', `Mióta megy a bot`)
        .addBlankField()
        .addField("**Idő:**", moment().format('hh:mm'))
        .setFooter(`Parancsot meg hívta: ${message.author.tag}`, message.author.avatarURL)
        .setAuthor(`Készítette:\n ${emo[":pipa"]} !/Mééz\!MateHUN!/Mééz\!#2427 ${emo[":pipa"]}`)
      message.channel.send(embed);
};
