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
    if (expected === actual) {
        const result = "PASS";
    } else {
        const result = "FAIL";
    }
    console.log(`filterEmptyStringTest - ${result} - Expected: ${expected} Actual: ${actual}`);
}

/*
 *  Test filter with a null string
 */
function filterNullStringTest() {
    const string = null;
    const expected = false;
    const actual = moderation.filter(string);
    if (expected === actual) {
        const result = "PASS";
    } else {
        const result = "FAIL";
    }
    console.log(`filterEmptyStringTest - ${result} - Expected: ${expected} Actual: ${actual}`);
}


filterEmptyStringTest();
filterNullStringTest();