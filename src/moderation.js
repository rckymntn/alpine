const fs = require("fs");

/*
 *  Reads the contents of filter.csv into an array for easy access 
 */
const filterArray = fs.readFileSync("./filter.csv", "utf-8").split(",");


/*
 *  Returns true if a word in message matches a word in filter.csv, false otherwise
 */
module.exports.filter = (message) => {
    for (i = 0; i < filterArray.length; i++) {
        if (sanitize(String(message)).includes(sanitize(filterArray[i]))) {
            return true;
        }
    }
    return false;
}

/*
 *  Converts leetspeak to normal text
 *  Note that there's some interference with this and sanitize()
 *  All converted to lower case as to work with sanitize()
 */
module.exports.deLeet = (string) => {
    string.toLowerCase();
    // There has to be a better way to do this
    string = string.replace(/1/g, "l");
    string = string.replace(/3/g, "e");
    string = string.replace(/4/g, "a");
    string = string.replace(/5/g, "s");
    string = string.replace(/7/g, "t");
    string = string.replace(/8/g, "b");
    string = string.replace(/9/g, "g");
    string = string.replace(/0/g, "o");
    string = string.replace(/!/g, "i");
    string = string.replace(/@/g, "a");  
    string = string.replace(/\$/g, "s");
    return string;
}


/*
 *  Makes a string lowercase and removes all punctuation 
 */
function sanitize(string) {
    string.toLowerCase();
    string = string.replace(/['".,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    return string;
}