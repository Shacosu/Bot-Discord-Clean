const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, cmdArgs) => {
    const reqBTC = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
    const reqBNB = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT');
    const reqETH = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT');
    const cryptoEmbed = new MessageEmbed()
        .setTitle('Criptomonedas')
        .addField(reqBTC.data.symbol, `$ ${parseInt(reqBTC.data.price)} USD`)
        .addField(reqBNB.data.symbol, `$ ${parseInt(reqBNB.data.price)} USD`)
        .addField(reqETH.data.symbol, `$ ${parseInt(reqETH.data.price)} USD`)
        .setFooter('By Shacosu')
        .setTimestamp()
    message.channel.send(cryptoEmbed);
}