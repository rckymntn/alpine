/*
 *  Tests for moderation.js
 */


const moderation = require("../src/moderation");


/*
 *  Test filter with an empty string
 */
function filterEmptyStringTest() {
    const string = "";
    const expected = false;
    const actual = moderation.filter(string);
    result = expected === actual;
    console.log(`filterEmptyStringTest - Expected: ${expected} Actual: ${actual}`);
}


filterEmptyStringTest();