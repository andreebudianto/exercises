/* Phase 0 Week 2 Exercise 7 */
/* Program Looping Asterisk */

/* 1. Sorting Asterisk Line */
var rows1 = 5;
for (var i = 0; i < rows1; i++) {
    console.log("*");
}

/* 2. Sorting Asterisk Line with Nested Looping */
var rows2 = 5;
for (var i = 0; i < rows2; i++) {
    var asterisk = "";
    for (var j = 0; j < rows2; j++) {
        asterisk = asterisk + "*";
    }
    console.log(asterisk);
}

/* 3. Sorting Flooring Asterisk Line with Nested Looping */
var rows3 = 5;
for (var i = 0; i < rows3; i++) {
    var asterisk = "";
    for (var j = 0; j <= i; j++) {
        asterisk = asterisk + "*";
    }
    console.log(asterisk);
}