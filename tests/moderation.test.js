/*
 *  Tests for moderation.js
 */


const moderation = require("../src/moderation");


/*
 *  Test filter with a null string
 */
test("filter with a null string", () => {
    const string = null;
    expect(moderation.filter(string)).toBe(false);
});


/*
 *  Test filter with an empty string
 */
test("filter with an empty string", () => {
    const string = "";
    expect(moderation.filter(string)).toBe(false);
});


/* 
 *  Test filter with an integer
 */
test("filter with an integer", () => {
    const string = 1;
    expect(moderation.filter(string)).toBe(false);
})


/* 
 *  Test filter with no blocked terms
 */
test("filter with no non-permitted terms", () => {
    const string = "The quick brown fox leaped over the lazy dog";
    expect(moderation.filter(string)).toBe(false);
});