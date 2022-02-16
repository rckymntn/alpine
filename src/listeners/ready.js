const commandManager = require("../command-manager");

module.exports.ready = (client) => {
    client.once("ready", () => {
        console.log(`${client.user.username} ready.`);
        client.guilds.cache.forEach(guild => console.log(`Serving ${guild.name}.`));
        client.user.setPresence("online");
        //commandManager.unregister();
        commandManager.register(); 
    });
}