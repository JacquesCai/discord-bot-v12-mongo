const Discord = require('discord.js');
const config = require('./config.js');
const { loadBot } = require('./util/loader');
require("dotenv").config({
  path: ".env",
});

const client = new Discord.Client();

["commands", "cooldowns"].forEach(x => client[x] = new Discord.Collection());

loadBot(client);

client.login(process.env.TOKEN);