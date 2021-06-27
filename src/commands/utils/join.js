const con = require('../../db');

module.exports.run = (client, message, cmdArgs) => {
    userName = cmdArgs[0];
    userTitle = cmdArgs[1];
    userDesc = cmdArgs[2];
    con.query(`INSERT INTO posts (username, title, postText) VALUES (?, ?, ?)`,[userName, userTitle, userDesc], (err, result) => {
        if (err) return console.log(err);
        console.log('Done')
    })
}