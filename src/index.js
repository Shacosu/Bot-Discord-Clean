require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json');
const fs = require('fs').promises;
const path = require('path');

// Crea el arreglo de nombre de archivos.
client.commands = new Map();

client.on('ready', () => {
  console.log(`${client.user.tag} Iniciado.`);
  client.user.setActivity("LATAM Dev's", { type: 'WATCHING' });
});

// Command Handler
client.on('message', async function(message){
    if(message.author.bot) return;
    if(!message.content.startsWith(config.client.prefix)) return;
    let cmdArgs = message.content.substring(message.content.indexOf(config.client.prefix)+1).split(new RegExp(/\s+/))
    let cmdName = cmdArgs.shift();
    if (client.commands.get(cmdName)) {
      client.commands.get(cmdName).run(client, message, cmdArgs);
      message.delete();
    } else {
      message.delete();
      message.reply('El comando ingresado no existe!').then((msg) => msg.delete({ timeout: 3000 }));
    }
  });

(async function registerCommand(dir = 'commands') {
    let files = await fs.readdir(path.join(__dirname, dir));
    for (let file of files) { 
        let stat = await fs.lstat(path.join(__dirname, dir, file));
        if (stat.isDirectory()) {
        registerCommand(path.join(dir, file));
        } else {
        if (file.endsWith('.js')) {
            let cmdName = file.substring(0, file.indexOf('.js'))
            let cmdModule = require(path.join(__dirname, dir, file));
            client.commands.set(cmdName, cmdModule);
        }
    }
}
})();
  


client.login(process.env.TOKEN);