/*
 *  This is the main part of the bot.
 *  Startup and on interaction events are handled here.
 */


require("dotenv").config();
const fs = require("fs");
const {Client, Collection, Intents} = require("discord.js"); 


/* 
 *  Declare any guild ids here, if you want to use them. 
 *  const guild = process.env.GUILD_ID; 
 */
const token = process.env.DISCORD_TOKEN;
const client = new Client({intents: [Intents.FLAGS.GUILDS]});


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
    console.log("ready");
    client.user.setPresence("online");
});


/* 
 *  This will run on every "interaction" and execute functions accordingly. 
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
            await interaction.reply({ content: "Error.", ephemeral: true});
        }
    }
});


client.login(token);