const Discord = require('discord.js');
const emo = require('../emoji.json');
const szinek = require('../color.json');
const moment = require('moment')
exports.run = async (bot, message, args, prefix) =>
{ 

    let kuldo = message.author;
        async function purge() {
            message.delete();
            if (!message.member.roles.find("name", "Mééz")) {
                message.channel.send("Nincs jogosultságod a használatához! :)))" + kuldo.toString());
                return;
            }
            if (isNaN(args[0])) {
                message.channel.send('Kérlek adj meg egy számot \n Használat :: !cc Szám');
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + 'Üzenet találva, törlés');

            message.channel.bulkDelete(fetched)
            .catch(error => console.log(`Error: ${error}`));
        }
        purge();
        message.delete()
        return;
};