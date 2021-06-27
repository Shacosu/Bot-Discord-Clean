const con = require('../../db');

module.exports.run = (client, message, cmdArgs) => {
    userID = cmdArgs[0];
    con.query(`SELECT * FROM posts ORDER BY id`, (err, result) => {
        if (err) return;
        result.forEach(user => {
            message.channel.send(`${user.id}: ${user.username}`);
        })
    })
}
