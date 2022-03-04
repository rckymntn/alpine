/*
 *  Several options of event logging:
 *      - console
 *      - channel
 *      - file
 *      - all
 */


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
 *  Logs a string to a channel
 */
module.exports.channelLogger = (string, context) => {
    const date = getDate();
    // Write log to log channel
}


/*
 *  Logs a string to a file
 */
module.exports.fileLogger = (string, context) => {
    const date = getDate();
    // Write log to log file
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