const Discord = require('discord.js');
const prefix = '?'
const token = process.env.token;
var bot = new Discord.Client();
const moment = require('moment')
moment.locale('hu')


bot.on("ready", async () => {
const valtozok = [
    "",
    `?parancsok`,
    `?ping`,
    `Bot neve: MéééZ!`
]

setInterval(function() {
    const index = Math.floor(Math.random() * (valtozok.length - 1) + 1);
     bot.user.setActivity(valtozok[index], {type: "WATCHING"});
}, 3000);
});





bot.on("ready", async () => {
    console.log(`[${bot.user.username}] El indultam ennyi szerveren : [${bot.guilds.size}] \n Ekkor: ${moment().format('LLLL')} \n \n \n \n \n \n \n `)  
})


bot.on('message', async (message) => 
{
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(bot, message, args, prefix, moment);
    } catch (err) {
}});


//---------------------####Chat__Moderation####------------------------------\\

bot.on("message", message => {
  if (message.author.bot) return;
  if (message.author.id === "674997482609967116") return;

  let szavak = ["discord.gg/", "kurva", "kurva anyád", "gyökér", "cigány", "geci", "bazdmeg", "kutya", "anyád", "balfasz", "baszott", "bazd", "fuck", "mother", "shit", "motherfucker", "fasz", "pina", "te retkes idota", "idiota", "faszopó", "köcsög", "bolond", "buzi", "nyomorék", "nyomorék", "bazd", "bazdmeg", "basz", "baszadék", "nyomo", "anyukád", "maradvány", "Kulák", "picsa"]
  let talalt = false;
  for (var a in szavak) {
       if (message.content.toLowerCase().includes(szavak[a].toLowerCase())) talalt = true;
  }
  if (talalt) {
  message.delete();
  let time = new Date();
  console.log("Csunya szót írtXD :: "+message.author.tag + "\n" + moment().format('LLLL'));
  message.author.send(`Na szasz tesóm Tudod te, hogy mit írtál ? Ne beszélj mán csunyán naaa Köszi puszi`);
  }
});

//---------------------####Chat__Moderation####------------------------------\\


//---------------------####Server__Stats####----------------------------------\\

setInterval(function(){ 
  bot.channels.get('711518249749184512').setName(`Time ${moment().format('LT')}`)
}, 60*1000);


//member Counter --------------------------------

const serverStats = {
    guildID: '560863552441810945',
    totalUsersID: '710340600146296882',
    memberCountID: '710340850223415359',
    botCountID: '710340885933719562',
  }

  bot.on("guildMemberAdd", member => {
    if(member.guild.id !== serverStats.guildID) return;
    bot.channels.get(serverStats.totalUsersID).setName(`Total Users: ${member.guild.memberCount}`);
    bot.channels.get(serverStats.memberCountID).setName(`member Count: ${member.guild.members.filter(m => !m.user.bot).size}`);
    bot.channels.get(serverStats.botCountID).setName(`Bot Count: ${member.guild.members.filter(m => m.user.bot).size}`);
  });
  
  bot.on("guildMemberRemove", member => {
    if(member.guild.id !== serverStats.guildID) return;
    bot.channels.get(serverStats.totalUsersID).setName(`‍Total Users: ${member.guild.memberCount}`);
    bot.channels.get(serverStats.memberCountID).setName(`member Count: ${member.guild.members.filter(m => !m.user.bot).size}`);
    bot.channels.get(serverStats.botCountID).setName(`Bot Count: ${member.guild.members.filter(m => m.user.bot).size}`);
  });

//---------------------####Server__Stats####----------------------------------\\

bot.on('message', (message)  => {
  if (message.content.toLowerCase() === '>)') {
    message.channel.send('<(')
  }
})

bot.login(token);