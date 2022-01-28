/* Dependancies */
require("dotenv").config();
const discord = require("discord.js");

/* Discord Token */
const token = process.env.DISCORD_TOKEN;

const client = new discord.Client({intents: [discord.Intents.FLAGS.GUILDS]});

client.once("ready", () => {
    console.log("ready");
});

client.login(token);