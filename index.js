const Discord = require("discord.js");
const { loadBot } = require("./util/loader");
require("dotenv").config({
  path: ".env",
});

const client = new Discord.Client();
require("./util/functions")(client);
client.config = require("./config");
client.mongoose = require("./util/mongoose");
["commands", "cooldowns"].forEach(
  (x) => (client[x] = new Discord.Collection())
);

loadBot(client);
client.mongoose.init();

client.login(client.config.TOKEN);
