const Discord = require("discord.js");

module.exports.run = async (client, message, args, settings) => {
  const getSetting = args[0];
  const newSetting = args.slice(1).join(" ");

  switch (getSetting) {
    case "prefix": {
      if (newSetting) {
        await client.updateGuild(message.guild, { prefix: newSetting });
        return message.channel.send(
          `Nouveau préfix: \`${newSetting}\``
        );
      }
      message.channel.send(`Préfix actuel: \`${settings.prefix}\``);
    }
    case "logchannel": {
      if (newSetting) {
        await client.updateGuild(message.guild, { logChannel: newSetting });
        return message.channel.send(
          `Nouveau log channel: \`${newSetting}\``
        );
      }
      message.channel.send(`Log Channel actuel: #\`${settings.logChannel}\``);
    }
    default: {
      const embed = new Discord.MessageEmbed()
        .setTitle("Configuration")
        .setColor("#1E90FF")
        .addField("Prefix actuel", `${settings.prefix}`)
        .addField("Log channel actuel", `${settings.logChannel}`);

      return message.channel.send(embed);
    }
  }
};

module.exports.help = {
  name: "config",
  aliases: ["config"],
  category: "moderation",
  description: "Modifier les configurations",
  cooldown: 0,
  usage: "<key> <value>",
  permissions: true,
  isUserAdmin: false,
  args: false,
};
