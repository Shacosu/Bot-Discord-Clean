const con = require('../../db');

module.exports.run = (client, message, cmdArgs) => {
    userID = cmdArgs[0];
    con.query(`DELETE FROM usuarios WHERE id = ? `,userID, (err, result) => {
        if (err) return;
        message.channel.send(`Usuario eliminado satisfactoriamente!`);
    })
}
