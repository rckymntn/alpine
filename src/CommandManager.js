import Discord from "discord.js";
import fs from "fs";
import config from "../config.json" assert { type: "json" };

export default class CommandManager {
    constructor(client) {
        this.client = client;
        this.commandsPath = "./src/commands/";
        this.commandFiles = fs.readdirSync(this.commandsPath).filter(file => file.endsWith(".js"));
        this.rest = new Discord.REST().setToken(process.env.DISCORD_TOKEN);

    }

    // Set commands to the client attribute
    async set() {
        for (let file of this.commandFiles) {
            await import(`./commands/ping.js`).then((command) => {
                command = command.default;
                if ("data" in command && "execute" in command) {
                    this.client.commands.set(command.data.name, command);
                    console.log(`Command ${command.data.name} set.`);
                }
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    // Register commands with Discord
    async register() {
        let commands = [];
        for (let file of this.commandFiles) {
            await import(`./commands/ping.js`).then((command) => {
                command = command.default;
                commands.push(command.data.toJSON());
            }).catch((error) => {
                console.log(error);
            });
        }
        await this.rest.put(Discord.Routes.applicationCommands(config.clientId), {
            body: commands
        });
    }
}

// This can also be run independently outside of startup
const commandManager = new CommandManager();
commandManager.set();
commandManager.register();