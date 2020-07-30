const ms = require("ms");

module.exports.run = async (client, message, args) => {
    let user = message.guild.member(message.mentions.users.first());
    let muterole = message.guild.roles.cache.find(r => r.name === 'Muted');
    let muteTime = (args[1] || '60s');

    if (!muterole) {
        muterole = await message.guild.roles.create({
            data: {
                name: 'Muted',
                color: '#000',
                permissions: []
            }
        });

        message.guild.channels.cache.forEach(async (channel, id) => {
            await channel.updateOverwrite(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                CONNECT: false
            })
        })
    }

    await user.roles.add(muterole.id);
    message.channel.send(`<@${user.id}> a été muté pour ${ms(ms(muteTime))}.`);

    setTimeout(() => {
        user.roles.remove(muterole.id);
    }, ms(muteTime));
};

module.exports.help = {
    name: "mute",
    aliases: ['mute'],
    category: 'moderation',
    description: "Mute un utilisateur",
    cooldown: 10,
    usage: '<@mention> <time>',
    permissions: true,
    isUserAdmin: true,
    args: true
};