/*
 *  This is the main part of the bot.
 *  Startup and on interaction events are handled here.
 */


require("dotenv").config();
const {Client, Intents} = require("discord.js"); 
const commandManager = require("./command-manager");
const messageListener = require("./listeners/message-listener");
const interactionListener = require("./listeners/interaction-listener");
const readyListener = require("./listeners/ready-listener");
const guildListener = require("./listeners/guild-listener");


/* 
 *  Declare any guild ids here, if you want to use them
 *  const guild = process.env.GUILD_ID; 
 */
const token = process.env.DISCORD_TOKEN;
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});


/*
 *  Finds all commands in the commands directory so the bot can execute them
 */
commandManager.set(client);


/*
 *  Listeners
 */
readyListener.ready(client);
interactionListener.interactionCreate(client);
messageListener.messageCreate(client);
messageListener.messageUpdate(client);
messageListener.messageDelete(client);
guildListener.guildMemberRemove(client);
guildListener.guildBanAdd(client);


/*
 *  NOTHING BELOW THIS
 */
client.login(token);