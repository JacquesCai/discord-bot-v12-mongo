const Discord = require("discord.js");
const config = require("../../config.js");
const fs = require("fs");
const List = fs.readdirSync("./commands");

module.exports.run = (client, message, args) => {
  if (!args.length) {
    const embed = new Discord.MessageEmbed()
      .setTitle("Help")
      .setColor("#1E90FF")
      .addField(
        "Liste des commandes",
        `La liste de toutes les commandes disponibles 
            et leurs sous-catégories\nFaire \`${config.PREFIX}help <commande/alias>\` pour 
            plus d'informations à propos d'une commande.`
      );

    for (const category of List) {
      embed.addField(
        `${category}`,
        `${client.commands
          .filter((cat) => cat.help.category === category.toLowerCase())
          .map((cmd) => cmd.help.name)
          .join(", ")}`
      );
    }

    return message.channel.send(embed);
  } else {
    const command =
      client.commands.get(args.join(" ")) ||
      client.commands.find(
        (cmd) => cmd.help.aliases && cmd.help.aliases.includes(args.join(" "))
      );

    if (!command) {
      const errorNotFound = new Discord.MessageEmbed()
        .setTitle(`Commande : ${args.join(" ")}`)
        .setColor("#1E90FF")
        .setDescription(`Cette commande n'existe pas`);

      return message.channel.send(errorNotFound);
    }

    const embed = new Discord.MessageEmbed()
      .setTitle(`${command.help.name.toUpperCase()}`)
      .setColor("#1E90FF")
      .addField(
        "Description",
        `${command.help.description} (cooldown: ${command.help.cooldown}s)`
      )
      .addField(
        "Utilisation",
        command.help.usage
          ? `${config.PREFIX}${command.help.name} ${command.help.usage}`
          : `${config.PREFIX}${command.help.name}`,
        true
      );

    if (command.help.aliases.length != 0)
      embed.addField("Alias", `${command.help.aliases.join(", ")}`, true);

    return message.channel.send(embed);
  }
};

module.exports.help = {
  name: "help",
  aliases: ["h"],
  category: "public",
  description:
    "Renvoie la liste des commandes disponibles ou les informations sur une commande",
  cooldown: 0,
  usage: "<command_name>",
  permissions: false,
  isUserAdmin: false,
  args: false,
};
