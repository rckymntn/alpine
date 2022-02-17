/*
 *  message related listeners
 */


/*
 *  This will run on every new message sent in a server. 
 */
module.exports.messageCreate = (client) => {
    client.on("messageCreate", async message => {
        if (message.author.bot) {
            return;
        }
        console.log(`${message.author.username} sent message "${message.content}"`);
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
        console.log(`${message.author.username} edited message "${message}"`);
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
        console.log(`${message.author.username} deleted message "${message}"`);
    });
}