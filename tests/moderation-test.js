/*
 *  Tests for moderation.js
 */


const moderation = require("../src/moderation");
const testing = require("../tests/testing");


/*
 *  Test filter with an empty string
 */
function filterEmptyStringTest() {
    const string = "";
    const expected = false;
    const actual = moderation.filter(string);
    const result = testing.verify(expected, actual);
    console.log(`${result} - filterEmptyStringTest - Expected: ${expected} Actual: ${actual}`);
}

/*
 *  Test filter with a null string
 */
function filterNullStringTest() {
    const string = null;
    const expected = false;
    const actual = moderation.filter(string);
    const result = testing.verify(expected, actual);
    console.log(`${result} - filterEmptyStringTest - Expected: ${expected} Actual: ${actual}`);
}


filterEmptyStringTest();
filterNullStringTest();