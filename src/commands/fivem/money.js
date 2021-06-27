const con = require('../../db');
module.exports.run =  async(client, message, cmdArgs) => {
    if(message.member.hasPermission('ADMINISTRATOR')) {
        identifier = cmdArgs[0];
        money = cmdArgs[1];
        con.query(`update users set accounts = JSON_SET(accounts, "$.money", ${money}) where identifier = ?`,identifier, (err, result) => {
            if (err) return console.log(err);
            message.channel.send('Valor cambiado satisfactoriamente!')
        })
    }
}