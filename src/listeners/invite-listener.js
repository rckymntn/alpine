const lumberjack = require("../lumberjack");


/*
 *  
 */
module.exports.inviteCreate = (client) => {
    client.on("inviteCreate", async invite => {
        lumberjack.consoleLogger("Invite created", client);
    });
}


/*
 *  
 */
module.exports.inviteDelete = (client) => {
    client.on("inviteDelete", async invite => {
        lumberjack.consoleLogger("Invite deleted", client);
    });
}