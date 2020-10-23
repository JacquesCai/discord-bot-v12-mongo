module.exports.run = (client, message, args) => {
  const clean = (text) => {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
  };

  if (message.author.id !== "560144304119742464") return;
  try {
    const code = args.join(" ");
    let evaled = eval(code);

    if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

    message.delete();
    message.channel.send(clean(evaled), { code: "xl" });
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
};

module.exports.help = {
  name: "eval",
  aliases: ["eval"],
  category: "moderation",
  description: "Permet de évaluer une commande",
  cooldown: 0,
  usage: "<cmd>",
  permissions: false,
  isUserAdmin: false,
  args: true,
};
