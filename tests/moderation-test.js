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
    const result = expected === actual;
    console.log(`filterEmptyStringTest - Expected: ${expected} Actual: ${actual}`);
}

/*
 *  Test filter with a null string
 */
function filterNullStringTest() {
    const string = null;
    const expected = false;
    const actual = moderation.filter(string);
    const result = expected === actual;
    console.log(`filterEmptyStringTest - Expected: ${expected} Actual: ${actual}`);
}


filterEmptyStringTest();
filterNullStringTest();