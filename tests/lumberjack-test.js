/*
 *  Tests for lumberjack.js
 */

const lumberjack = require("../src/lumberjack");


/*
 *  lumberjack.fileLogger with a string provided, but no context
 */
function lumberjackFileLoggerNoContextTest() {
    lumberjack.fileLogger("No context test");
}


/*
 *  lumberjack.fileLogger with no string and no context provided
 */
function lumberjackFileLoggerNoContextNoStringTest() {
    lumberjack.fileLogger();
}


/*
 *  lumberjack.fileLogger with no context provided for a certain amount of iterations
 */
function lumberjackFileLoggerNoContextNthTest(iterations) {
    for (i = 0; i < iterations; i++) {
        lumberjack.fileLogger(`lumberjackFileLoggerNthTest iteration ${i}`);
    }
}


lumberjackFileLoggerNoContextTest();
lumberjackFileLoggerNoContextNoStringTest();
lumberjackFileLoggerNoContextNthTest(10);