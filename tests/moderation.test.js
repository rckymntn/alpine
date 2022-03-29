/*
 *  Tests for moderation.js
 */


const moderation = require("../src/moderation");


/*
 *  Test filter with an empty string
 */
test("filter with an empty string", () => {
    expect(moderation.filter("")).toBe(false);
});


/*
 *  Test filter with a null string
 */
test("filter with a null string", () => {
    expect(moderation.filter(null)).toBe(false);
});