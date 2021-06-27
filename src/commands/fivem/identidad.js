const { MessageEmbed } = require('discord.js');
const con = require('../../db');

module.exports.run = (client, message, cmdArgs) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
        let identifier = cmdArgs[0];
        con.query(`SELECT * FROM users WHERE identifier = ? `,identifier, (err, result) => {
            if (err) return;
            result.forEach(item => {
                const { firstname, lastname, dateofbirth, inventory, group, job, phone_number, accounts } = item;
                let sex = item.sex;
                if (sex === 'm') {
                    sex = 'masculino';
                } else {
                    sex = 'femenino'
                }
                const embedIdentifier = new MessageEmbed()
                .setTitle('RolePlay')
                .setAuthor('MySql - By @Shacosu', 'https://cdn.discordapp.com/attachments/833351691263934544/839986937623216189/ab67616d00001e02a4e590d39ac8054b400fa1dc.jpg')
                .addField('📋Nombre:', `${firstname} ${lastname}`, true)
                .addField('🎂Fecha de nacimiento:', dateofbirth, true)
                .addField('🤵Sexo:', sex)
                .addField('💼Trabajo:', job)
                .addField('💸Dinero:', accounts)
                .addField('📱Celular:', phone_number)
                .addField('💰Inventario:', inventory)
                .addField('🎓Grupo:', group)
                .setFooter(`Peticion hecha por ${message.author.username}`)
                .setColor('GREEN')
                .setTimestamp()
            message.channel.send(embedIdentifier);
            })
        })
    }
}