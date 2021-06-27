const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, cmdArgs) => {
    const req = await axios.get('https://www.gamerpower.com/api/giveaways');
    const games = req.data;
    const cryptoEmbed = new MessageEmbed()
    games.map(async (game) => {
        cryptoEmbed.setTitle('Juegos Gratis')
        cryptoEmbed.addField(`${game.title} - ${game.worth}`, game.open_giveaway_url)
        cryptoEmbed.setFooter('By Shacosu')
        cryptoEmbed.setTimestamp()
    })
    await message.channel.send(cryptoEmbed);
    
}