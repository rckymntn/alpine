/*
 *  This is the main part of the bot.
 *  Startup and on interaction events are handled here.
 */


require("dotenv").config();
const fs = require("fs");
const {Client, Collection, Intents} = require("discord.js"); 
const moderation = require("./moderation");


/* 
 *  Declare any guild ids here, if you want to use them. 
 *  const guild = process.env.GUILD_ID; 
 */
const token = process.env.DISCORD_TOKEN;
const client = new Client({intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]});


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
    console.log("Ready.");
    client.user.setPresence("online");
});


/* 
 *  This will run on every interaction (slash command) and execute functions accordingly. 
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
            await interaction.reply({content: "Error.", ephemeral: true});
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
    console.log(`Message: ${message.content}`);
});


/*
 *  This will run on every message update in a server. 
 */
client.on("messageUpdate", async message => {
    if (message.author.bot) {
        return;
    }
    console.log(`Updated message: ${message}`);
});


client.login(token);