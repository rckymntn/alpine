/*
 *  Tests for lumberjack.js
 */


const lumberjack = require("../src/lumberjack");
const fs = require("fs");


/*
 *
 */
test("consoleLogger with no string or context", () => {
    lumberjack.fileLogger();
    const lastLine = getLastLine(fs.readFileSync("logs/client.log"));
    const expected = "";
    expect(lastLine).toBe(expected);
});


/*
 *  Get the last line of a file as a string 
 */
function getLastLine(file) {
    file = String(file);
    const lines = file.split('\n');
    const lastLine = lines[lines.length - 1];
    return lastLine;
}