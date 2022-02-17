/*
 *  Logs information to a variety of places.
 *  
 *  string: String to be logged
 *  context: Message or interaction to get the guild it originated from 
 */
module.exports.logger = (string, context) => {
    console.log(string);
    // TODO: Write string to a log file 
    // In the future, you could also pass the message or interaction (contex)
    // as a parameter to get the guild in which it was sent and send the
    // log to a dedicated log channel in that guild
}