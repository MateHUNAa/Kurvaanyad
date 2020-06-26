const moment = require('moment')
const discord = require('discord.js')
exports.run = async (bot, message, args) =>{ 
    moment.locale('hu')
    const embed = new discord.RichEmbed()
     .setThumbnail("https://ichef.bbci.co.uk/news/1024/cpsprodpb/1006E/production/_110664656_twitchyoutube.jpg")
     .setTitle('MÁTÉ+!: ') 
     .addField("<:tw:721898149873975357> Twitch ","**https://www.twitch.tv/matehun2566**")
     .addField("<:yt:721898261950103603> Youtube ","**https://www.youtube.com/channel/UCsILNH6_StU6ZZgzMnvxp7g?view_as=subscriber**")
     .setColor("#6a006a")
      message.delete();
      return;
}
