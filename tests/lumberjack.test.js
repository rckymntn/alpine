/*
 *  Tests for lumberjack.js
 */


const lumberjack = require("../src/lumberjack");
const fs = require("fs");


/*
 *  Tests fileLogger when no string or context is provided
 */
test("fileLogger with no string or context", () => {
    lumberjack.fileLogger();
    const lastLine = getLastLine(fs.readFileSync("logs/client.log"));
    const date = new Date();
    const expected = `${date} - `;
    expect(lastLine).toBe(expected);
});


/*
 *  Get the last line of a file as a string 
 */
function getLastLine(file) {
    file = String(file);
    const lines = file.split('\n');
    const lastLine = lines[lines.length - 2];
    return lastLine;
}