const lumberjack = require("../src/lumberjack");


function lumberjackFileLoggerNoContextTest() {
    lumberjack.fileLogger("No context test");
}


function lumberjackFileLoggerNoContextNoStringTest() {
    lumberjack.fileLogger();
}

function lumberjackFileLoggerNthTest(iterations) {
    for (i = 0; i < iterations; i++) {
        lumberjack.fileLogger(`lumberjackFileLoggerNthTest iteration ${i}`);
    }
}


lumberjackFileLoggerNoContextTest();
lumberjackFileLoggerNoContextNoStringTest();
lumberjackFileLoggerNthTest(10);