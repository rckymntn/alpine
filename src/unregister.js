/*
 *  This will unregister (delete) all commands currently registered at the global guild scope. 
 */

require("dotenv").config();

const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const rest = new REST({ version: "9" }).setToken(process.env.DISCORD_TOKEN);

rest.get(Routes.applicationCommands(process.env.CLIENT_ID)).then(data => {
    const promises = [];
    for (const command of data) {
        const unregister = `${Routes.applicationCommands(process.env.CLIENT_ID)}/${command.id}`;
        promises.push(rest.delete(unregister));
    }
    return Promise.all(promises);
});