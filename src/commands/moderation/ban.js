module.exports.run = (client, message, cmdArgs) => {
    if (message.member.hasPermission("ADMINISTRATOR")) {
        const target = message.mentions.users.first();
        const tag = `<@${message.member.id}>`
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id);
            message.channel.send(`${tag} **El usuario [${target.username}] ha sido sancionado con exito!**`);
            targetMember.ban();
        } else {
            message.channel.send(`${tag} **Porfavor especifica alguien a quien sancionar!**`)
        }
    } else {
        message.channel.send(`${tag} **No tienes permisos para usar este comando!**`)
            .then((message) => message.delete({ timeout: 5000 }))
    }
}