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
 *  Test fileLogger with string provided 
 */
test("fileLogger with string but no context", () => {
    lumberjack.fileLogger("string, but no context test");
    const lastLine = getLastLine(fs.readFileSync("logs/client.log"));
    const date = new Date();
    const expected = `${date} - string, but no context test`;
    expect(lastLine).toBe(expected);
});


/*
 *  Test fileLogger with an integer provided as a string
 */
test("fileLogger with integer as string", () => {
    lumberjack.fileLogger(1);
    const lastLine = getLastLine(fs.readFileSync("logs/client.log"));
    const date = new Date();
    const expected = `${date} - 1`;
    expect(lastLine).toBe(expected);
});


/*
 *  Get the last line of a file as a string 
 */
function getLastLine(file) {
    try {
        file = String(file);
        const lines = file.split('\n');
        const lastLine = lines[lines.length - 2];
        return lastLine;
    } catch {
        console.log(`Could not find last line of ${file}.`)
        return "";
    }
}