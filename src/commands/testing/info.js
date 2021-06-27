const con = require('../../db');
module.exports.run =  async(client, message, cmdArgs) => {
    if(message.member.hasPermission('ADMINISTRATOR')) {
        identifier = cmdArgs[0];
        money = cmdArgs[1];
        con.query(`SELECT * FROM users`, (err, result) => {
            if (err) return console.log(err);
            result.forEach(item => {
                const { firstname, lastname } = item;
                let accounts = item.accounts;
                console.log(accounts)
                console.log(accounts.money)

            })
        })
    }
}
