const commandManager = require("../command-manager");

module.exports.ready = (client) => {
    client.once("ready", () => {
        console.log("Ready.");
        client.user.setPresence("online");   
        commandManager.unregister();
        commandManager.register(); 
    });
}