module.exports.run = (client, message, args) => {
    let user = message.guild.member(message.mentions.users.first());
    let muterole = message.guild.roles.cache.find(r => r.name === 'Muted');

    if (!user.roles.cache.has(muterole.id))
        return message.reply("l'utilisateur mentionné n'est pas muté")

    user.roles.remove(muterole.id);
    message.channel.send(`<@${user.id}> n'est plus muté.`);

};

module.exports.help = {
    name: "unmute",
    aliases: ['unmute'],
    category: 'moderation',
    description: "Unmute un utilisateur",
    cooldown: 10,
    usage: '<@mention>',
    permissions: true,
    isUserAdmin: true,
    args: true
};