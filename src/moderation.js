const fs = require("fs");


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
 */
function deLeet(string) {
    string.toLowerCase();
    string.replace("1", "l");
    string.replace("3", "e");
    string.replace("7", "t");
    string.replace("9", "g");
    string.replace("!", "i");
    string.replace("@", "a");  
    string.replace("$", "s");  
}


/*
 *  Makes a string lowercase and removes all punctuation 
 */
function sanitize(string) {
    return string.toLowerCase().replace(/['".,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}