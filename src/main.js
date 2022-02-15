/*
 *  This is the main part of the bot.
 *  Startup and on interaction events are handled here.
 */


require("dotenv").config();
const fs = require("fs");
const {Client, Collection, Intents} = require("discord.js"); 
const moderation = require("./moderation");
const commandManager = require("./command-manager");


/* 
 *  Declare any guild ids here, if you want to use them. 
 *  const guild = process.env.GUILD_ID; 
 */
const token = process.env.DISCORD_TOKEN;
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});


/*
 *  Finds all commands in the commands directory so the bot can execute them.
 */
client.commands = new Collection();
const commandList = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"));
for (const file of commandList) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}


/*
 *  This will run once at startup. 
 */
client.once("ready", () => {
    console.log(`${client.user.username} ready.`);
    client.guilds.cache.forEach(guild => console.log(`Serving ${guild.name}.`));
    client.user.setPresence("online");
    //commandManager.unregister();
    commandManager.register(); 
});


/* 
 *  This will run on every interaction (slash command)
 *  and execute functions accordingly. 
 */
client.on("interactionCreate", async interaction => {
    if (!interaction.isCommand()) {
        return;
    } else {
        const command = client.commands.get(interaction.commandName);
        if (!command) {
            return;
        }
        try {
            await command.execute(interaction);
        } catch(error) {
            console.log(error);
            await interaction.reply({content: `Error: ${error}`, ephemeral: true});
        }
    }
});


/*
 *  This will run on every new message sent in a server. 
 */
client.on("messageCreate", async message => {
    if (message.author.bot) {
        return;
    }
    console.log(`${message.author.username} sent message "${message.content}"`);
});


/*
 *  This will run on every message update in a server. 
 */
client.on("messageUpdate", async message => {
    if (message.author.bot) {
        return;
    }
    console.log(`${message.author.username} edited message "${message}"`);
});


/*
 *  This will run on every message delete in a server. 
 */
client.on("messageDelete", async message => {
    if (message.author.bot) {
        return;
    }
    console.log(`${message.author.username} deleted message "${message}"`);
});


client.login(token);