/*
 *  message related listeners
 */


const moderation = require("../moderation");
const lumberjack = require("../lumberjack");


/*
 *  This will run on every new message sent in a server. 
 */
module.exports.messageCreate = (client) => {
    client.on("messageCreate", async message => {
        if (message.author.bot) {
            return;
        }
        if (moderation.filter(message)) {
            message.delete();
        }
        lumberjack.consoleLogger(`${message.author.username} sent message "${message.content}"`, message);
    });
}


/*
 *  This will run on every message update in a server. 
 */
module.exports.messageUpdate = (client) => {
    client.on("messageUpdate", async message => {
        if (message.author.bot) {
            return;
        }
        if (moderation.filter(message)) {
            message.delete();
        }
        lumberjack.consoleLogger(`${message.author.username} edited message "${message}"`, message);
    });
}


/*
 *  This will run on every message delete in a server. 
 */
module.exports.messageDelete = (client) => {
    client.on("messageDelete", async message => {
        if (message.author.bot) {
            return;
        }
        lumberjack.consoleLogger(`${message.author.username} deleted message "${message}"`, message);
    });
}


/*
 *  This will run when reactions added to messages
 */
module.exports.messageReactionAdd = (client) => {
    client.on("messageReactionAdd", async message => {

    });
}


/*
 *  This will run when reactions are removed from messages 
 */
module.exports.messageReactionRemove = (client) => {
    client.on("messageReactionRemove", async message => {

    });
}