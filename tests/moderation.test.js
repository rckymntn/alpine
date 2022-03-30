/*
 *  Tests for moderation.js
 */


const moderation = require("../src/moderation");
const fs = require("fs");


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


/*
 *  Test filter with one blocked term selected randomly from filter.csv
 */
test("filter with one random non-permitted term", () => {
    const filterArray = fs.readFileSync("./filter.csv", "utf-8").split(",");
    const randWord = filterArray[Math.floor(Math.random() * filterArray.length)];
    const string = `The quick brown fox ${randWord} over the lazy dog`;
    expect(moderation.filter(string)).toBe(true);
});


/*
 *
 */
test("filter with one random obfuscated non-permitted term", () => {
    const filterArray = fs.readFileSync("./filter.csv", "utf-8").split(",");
    const randWord = filterArray[Math.floor(Math.random() * filterArray.length)];
    const randWordObfuscated = randWord.slice(0, 1) + "." + randWord.slice(1);
    const string = `The quick brown fox ${randWordObfuscated} over the lazy dog`;
    expect(moderation.filter(string)).toBe(true);
});