import Discord from "discord.js";
import CommandManager from "./commandManager.js";
import ModerationManager from "./ModerationManager.js";
import config from "../config.json" assert { type: "json" };

const client = new Discord.Client({intents: [Discord.GatewayIntentBits.Guilds]});
const commandManager = new CommandManager(client);
const moderationManager = new ModerationManager();

// Initialize the client commands collection attribute BEFORE setting / registering any commands in CommandManager
client.commands = new Discord.Collection();

client.once(Discord.Events.ClientReady, (client) => {
    console.log(`Logged in as ${client.user.tag}.`);
    commandManager.set().then(commandManager.register());
});


// Moderation 
if (config.moderation) {
    import("./ModerationManager.js").then(() => {
        client.on(Discord.Events.GuildMemberAdd, (added) => {
            if (moderationManager.isPreemptivelyBanned(added)) {
                added.ban();
            }
        });
        client.on(Discord.Events.MessageCreate, (message) => {
            if (moderationManager.screen(message)) {
                message.delete();
            }
        });
    }).catch((error) => {
        console.log(error);
    });
}

// Commands
client.on(Discord.Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) {
        return;
    }
    let command = interaction.client.commands.get(interaction.commandName);
    if (!command) {
        return;
    }
    await command.execute(interaction);
})

client.login(process.env.DISCORD_TOKEN);