const mongoose = require("mongoose");
const { DEFAULT } = require("../config");

const guildSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  prefix: {
    type: String,
    default: DEFAULT.prefix,
  },
  logChannel: {
    type: String,
    default: DEFAULT.logChannel,
  },
});

module.exports = mongoose.model("Guild", guildSchema);
