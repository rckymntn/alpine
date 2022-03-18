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
function deLeet(string) {
    string.toLowerCase();
    string = string.replace("1", "l");
    string = string.replace("3", "e");
    string = string.replace("4", "a");
    string = string.replace("5", "s");
    string = string.replace("7", "t");
    string = string.replace("8", "b");
    string = string.replace("9", "g");
    string = string.replace("0", "o");
    string = string.replace("!", "i");
    string = string.replace("@", "a");  
    string = string.replace("$", "s");  
}


/*
 *  Makes a string lowercase and removes all punctuation 
 */
function sanitize(string) {
    return string.toLowerCase().replace(/['".,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}