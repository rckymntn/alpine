/*
 *  Several options of event logging:
 *      - console
 *      - channel
 *      - file
 *      - all
 */


const fs = require("fs");


/*
 *  Logs a string to console
 */
module.exports.consoleLogger = (string, context) => {
    const date = getDate();
    try {
        const guildId = context.guild.id;
        const guildName = context.guild.name;
        console.log(`${date} - ${guildId} (${guildName}) - ${string}`);
    } catch {
        console.log(`${date} - ${string}`);
    }
}


/*
 *  TODO
 *  Logs a string to a channel
 */
module.exports.channelLogger = (string, context) => {
    const date = getDate();
    context.guild.channels.forEach(channel => {
        if (channel.name == "logs") {
            // get channel id
            // send log to channel
            // `${date} - ${string}`
            // guild name or id isn't necessary since it's being sent to a channel in that guild
        }
    });
    // create channel called logs
    // send log to channel
    // `${date} - ${string}`
    // guild name or id isn't necessary since it's being sent to a channel in that guild
}


/*
 *  Logs a string to a file
 */
module.exports.fileLogger = (string = "", context) => {
    const date = getDate();
    try {
        // Situations where context is known or important (eg, message deletion)
        const guildId = context.guild.id;
        const guildName = context.guild.name;
        fs.appendFileSync(`logs/${guildId}.log`, `${date} - ${guildId} (${guildName}) - ${string}\n`);
    } catch {
        // Situations where context is unknown or not important (eg, startup)
        const guildId = "client";
        fs.appendFileSync(`logs/${guildId}.log`, `${date} - ${string}\n`);
    }
}


/*
 *  Logs a string to console, channel, and file 
 */
module.exports.logger = (string, context) => {
    this.consoleLogger(string, context);
    this.channelLogger(string, context);
    this.fileLogger(string, context);
}


/*
 *  Date formatting used for logging functions
 */
function getDate() {
    const date = new Date();
    return date;
}