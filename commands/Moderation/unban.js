module.exports.run = async (client, message, args) => {
    const user = await client.users.fetch(args[0]);

    if (!user)
        return message.channel.send("L'utilisateur n'existe pas.");

    message.guild.members.unban(user);
};

module.exports.help = {
    name: "unban",
    aliases: ['unban'],
    category: 'moderation',
    description: "Ban un utilisateur",
    cooldown: 30,
    usage: '<user.id>',
    permissions: true,
    isUserAdmin: false,
    args: true
};