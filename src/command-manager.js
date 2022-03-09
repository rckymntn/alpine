/*
 *  Slash commands need to be registered with the Discord API.
 *
 *  Here, we're registering commands with a global scope.
 *  Or, in other words, any guild using the bot can use any command, barring role restrictions.
 *  This can easily be changed by adding the Guild ID to the API put. 
 * 
 *  Also note that global guild scope slash commands may take up to an hour to update.
 *  If you're testing a new command, registering a command to a specific guild takes far less time.
 * 
 *  This needs to be run on first start up and when new command(s) are added. 
 *  One could also modify script in package.json to run on startup, but could cause non-negligible startup performance issues, if you care. 
 */


require("dotenv").config();
const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { Collection } = require("discord.js");
const lumberjack = require("./lumberjack");


/*
 *  Add commands to the client
 */
module.exports.set = (client) => {
    client.commands = new Collection();
    const commandList = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"));
    for (const file of commandList) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.data.name, command);
    }
    lumberjack.consoleLogger(`Set slash commands`);
}


/*
 *  Registers slash commands with Discord API
 */
module.exports.register = () => {
    const rest = new REST({ version: "9" }).setToken(process.env.DISCORD_TOKEN);
    const commands = [];
    const commandList = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"));
    for (const file of commandList) {
        const command = require(`./commands/${file}`);
        commands.push(command.data.toJSON());
    }
    rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands }).then(() => lumberjack.consoleLogger("Registered slash commands"));
}


/*
 *  Unregisters slash commands with Discord API
 */
module.exports.unregister = () => {
    const rest = new REST({ version: "9" }).setToken(process.env.DISCORD_TOKEN);
    rest.get(Routes.applicationCommands(process.env.CLIENT_ID)).then(data => {
        const promises = [];
        for (const command of data) {
            const unregister = `${Routes.applicationCommands(process.env.CLIENT_ID)}/${command.id}`;
            promises.push(rest.delete(unregister));
        }
        return Promise.all(promises).then(() => lumberjack.consoleLogger("Unregistered slash commands"));
    });
}