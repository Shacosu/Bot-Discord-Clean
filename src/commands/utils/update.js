const con = require('../../db');

module.exports.run = (client, message, cmdArgs) => {
    userID = cmdArgs[0];
    username = cmdArgs[1];
    console.log(userID, username)
    con.query(`UPDATE usuarios SET username = "${username}" WHERE id = ${userID}`, (err, result) => {
        if (err) return;
        message.channel.send('Nombre actualizado correctamente!')
    })
}
