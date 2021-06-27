const { createConnection } = require('mysql');
const config = require('../config.json');

// Creamos la connexion con la DB
let con = createConnection(config.mysql); 
con.connect(err => {
    if (err) return console.log(err);
    console.log(`Conectado con la DB!`);
});

module.exports = con;