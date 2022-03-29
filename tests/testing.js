/*
 *  Functions to aid in testing 
 */

module.exports.verify = (expected, actual) => {
    if (expected === actual) {
        return ("PASS");
    } else {
        return ("FAIL");
    }
} 