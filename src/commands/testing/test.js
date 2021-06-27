module.exports.run = (client, message, cmdArgs) => {
    message.channel.send('Bienvenido al cuestionario de prueba!\nTienes 10 segundos para responder').then((msg) => msg.delete({ timeout: 10000 }) )
    message.channel.awaitMessages(msg => msg.author.id === message.author.id, { max: 1, time: 10000})
        .then((collection) => {
            if(collection.first().content.toLowerCase() === 'si') {
                message.channel.send('Has ingresado si!');
            }
        })
        .catch(() => message.channel.send('Tiempo acabado')
        .then(msg => msg.delete({ timeout: 5000 })))
}