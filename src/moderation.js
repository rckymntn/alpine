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


function sanitize(string) {
    return string.toLowerCase().replace(/['".,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}