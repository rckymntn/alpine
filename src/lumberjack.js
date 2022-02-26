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
    const date = new Date();

    console.log(`${date.getTime()}: ${string}`);
}


/*
 *  Logs a string to a channel
 */
module.exports.channelLogger = (string, context) => {
    const date = new Date();
    // Write log to log channel
}


/*
 *  Logs a string to a file
 */
module.exports.fileLogger = (string, context) => {
    const date = new Date();
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