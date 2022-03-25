/*
 *  Tests for moderation.js
 */


const moderation = require("../src/moderation");
const testing = require("testing");

function filterTest() {
    const string = "";
    const expected = false;
    const actual = moderation.filter();
    result = testing.verify(expected, actual);
    console.log(`Testing moderation.filter() on ${string}. Expected: ${expected}. Actual: ${actual}.`);
}