/*const discord = require('discord.js');

exports.run = async (bot, message, args) => { 

    let pages = ['Első oldal', '2. oldal', 'parancsok', 'szinek'];
    let page = 1;

    const embed = new discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`oldalak: ${page} az ennyi ből ${pages.length}`)
    .setDescription(pages[page-1])

    message.channel.send(embed).then(message => {
        message.react('➡️').then( r => {
        message.react('⬅️')

            const elörefilter = (reaction, user) => reaction.emoji.name === '➡️' && user.id === message.author.id;
            const hátrafilter = (reaction, user) => reaction.emoji.name === '⬅️' && user.id === message.author.id;

            const elöre = message.createReactionCollector(elörefilter, { time: 6000});
            const hátra = message.createReactionCollector(hátrafilter, { time: 6000});
        
            hátra.on('collect', r => {
                if (page === 1) return;
                page--;
                embed.setDescription(page[pages-1]);
                embed.setFooter(`oldalak: ${page} az ennyi ből ${pages.length}`)
                message.edit(embed)
            
                elöre.on('collect', r => {
                    if (page === pages.length) return;
                    page++;
                    embed.setDescription(page[pages+1]);
                    embed.setFooter(`oldalak: ${page} az ennyi ből ${pages.length}`)
                    message.edit(embed)
                })
            })
        })
    })
}*/