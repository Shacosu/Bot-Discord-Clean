const con = require('../../db');
const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, cmdArgs) => {
    username = cmdArgs[0];
    con.query(`SELECT * FROM usuarios ORDER BY id`, (err, result) => {
        if (err) return;
        const showEmbed = new MessageEmbed()
        .setDescription('Desc') 
        result.forEach(user => {
            showEmbed.setDescription(`${user.id}: ${user.username}`)
        });
        message.channel.send(showEmbed);
    });
}