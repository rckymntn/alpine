/*
 *  Tests for lumberjack.js
 */


const lumberjack = require("../src/lumberjack");


/*
 *
 */
test("consoleLogger with no string or context", () => {
    lumberjack.fileLogger();

});


/*
 *  Get the last line of a file as a string 
 */
function getLastLine(file) {
    return;
}