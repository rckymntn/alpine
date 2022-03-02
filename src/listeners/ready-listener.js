/*
 *  ready related listeners
 */


const commandManager = require("../command-manager");
const lumberjack = require("../lumberjack");


/*
 *  This will run once at startup
 */
module.exports.ready = (client) => {
    client.once("ready", () => {
        lumberjack.consoleLogger(`${client.user.username} ready`);
        client.guilds.cache.forEach(guild => lumberjack.consoleLogger(`Serving ${guild.name}`));
        client.user.setPresence("online");
        //commandManager.unregister();
        commandManager.register(); 
    });
}