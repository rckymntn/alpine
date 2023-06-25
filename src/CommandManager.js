import * as Discord from "discord.js";
import config from "../config.json" assert { type: "json" };
import fs from "fs";

export default class CommandManager {
    constructor(client) {
        this.client = client;
        this.commandsPath = "./src/commands/";
        this.commandFiles = fs.readdirSync(this.commandsPath).filter(file => file.endsWith(".js"));
        this.rest = new Discord.REST().setToken(config.token);
    }

    async set() {
        for (let file of this.commandFiles) {
            await import(`./commands/ping.js`).then((command) => {
                command = command.default;
                if ("data" in command && "execute" in command) {
                    console.log(`Command ${command.data.name} set.`)
                    this.client.commands.set(command.data.name, command);
                }
            }).catch((error) => {
                console.log(error);
            });
        }
    }

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
        this.rest.put(Discord.Routes.applicationCommands(config.clientId), {
            body: commands
        })
    }
}

// This can also be run independently outside of startup
const commandManager = new CommandManager();
commandManager.set();
commandManager.register();