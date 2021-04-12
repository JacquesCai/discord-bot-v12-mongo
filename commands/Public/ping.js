const {MessageEmbed} = require("discord.js");

module.exports.run = (client, message) => {
    const botPing = Math.round(client.ws.ping);
    message.channel.send('pong :ping_pong:').then(m => {
        const embed = new MessageEmbed()
            .setTitle('Latencies')
            .setColor('#1AECFF')
            .addField('API', botPing + 'ms')
            .addField('Bot', (m.createdTimestamp - message.createdTimestamp) + 'ms');

        message.channel.send(embed);
    });
};

module.exports.help = {
    name: "ping",
    aliases: ['pong'],
    category: 'public',
    description: "Renvoie le ping",
    cooldown: 0,
    usage: '',
    permissions: false,
    isUserAdmin: false,
    args: false
};