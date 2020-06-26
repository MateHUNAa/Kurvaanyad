const discord = require('discord.js');
const emo = require('../emoji.json');
const szinek = require('../color.json');
exports.run = async (bot, message, args, prefix, moment) =>
{ 

    const kkenn = new discord.RichEmbed()
        .setThumbnail("https://i.pinimg.com/originals/38/08/b4/3808b458f7a0cd3ab88f6c653b290b61.gif")
        .setTitle('Version lista :')
        .setColor('RANDOM')
        .addField("**1.0.0**", "**°**Bot létre jötte")
        .addField("**1.2.0**", "**°**Autó moderáció!")
        .addField("**1.3.0**", "**°**Auto moderáció! javítva!")
        .addField("**1.4.0**", "**°**Igaz Hamis")
        .addField("**1.5.0**", "**°**Logolás!")
        .addField("**1.6.0**", "**°**Version list")
        .addField("**1.7.0**", "**°**Tag számláló!")
        .addField("**1.7.1**", "**°**Tag számláló Uppdated!")
        .addField("**1.8.0**", "**°**cserélödő status")
        .addField("**1.9.0**", "**°**Be jött a SzerverInfo parancs")
        .addField("**1.9.1**", "**°**Tag számláló fejlesztve!")
        .addField("**1.9.2**", "**°**Report parancs")
        .addField("**1.9.3**", "**°**Userinfo")
        .addField("**1.9*3**", "**°**Time?")
        .addField("**Idő:**", moment().format('hh:mm'))
        .setFooter(`Parancsot meg hívta: ${message.author.tag}`)
        .setAuthor("Készítette:\n !/Mééz\\!MateHUN!/Mééz\\!#2427")
      message.channel.send(kkenn);
};
