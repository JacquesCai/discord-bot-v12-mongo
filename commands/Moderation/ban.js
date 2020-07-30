module.exports.run = (client, message, args) => {
    const user = message.mentions.users.first();
    const reason = args.splice(1).join(" ");

    user ? message.guild.member(user).ban(reason) : message.channel.send("L'utilisateur n'existe pas.")
};

module.exports.help = {
    name: "ban",
    aliases: ['ban'],
    category: 'moderation',
    description: "Ban un utilisateur",
    cooldown: 30,
    usage: '<@mention> <raison>',
    permissions: true,
    isUserAdmin: true,
    args: true
};