module.exports.run = (client, message) => {
    let début = Date.now();
    message.channel.send('Ping')
        .then((m) => m.edit(`Pong : **${Date.now() - début}**ms`));
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