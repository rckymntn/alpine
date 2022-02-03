require("dotenv").config();
const fs = require("fs");
const {Client, Collection, Intents} = require("discord.js"); 


const token = process.env.DISCORD_TOKEN;

const client = new Client({intents: [Intents.FLAGS.GUILDS]});

client.commands = new Collection();
const commandList = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"));
for (const file of commandList) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}



client.once("ready", () => {
    console.log("ready");
    client.user.setPresence("online");
});

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