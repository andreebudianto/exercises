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

/* 4. Sorting Flooring Asterisk Line with Nested Looping and IF*/
var rows4 = 5;
for (var i = rows4; i > 0; i--) {
    var asterisk = "";
    for (var j = 0; j < rows4; j++) {
        if ( i-1 > j ) {
            asterisk = asterisk + " ";
        } else {
            asterisk = asterisk + "*";
        }
    }
    console.log(asterisk);
}

/* 5. Sorting Flooring Asterisk Line with Nested Looping and IF*/
var rows5 = 5;
for (var i = rows5; i > 0; i--) {
    var asterisk = "";
    for (var j = 0; j < rows5; j++) {
        if ( i-1 > j ) {
            asterisk = asterisk + " ";
        } else {
            asterisk = asterisk + "*";
        }
    }
    for (var k = 0; k < rows5-i; k++) {
        asterisk = asterisk + "*";
    }
    console.log(asterisk);
}

/* 6. Sorting Flooring Asterisk Line with Nested Looping and IF*/
var rows6 = 5;
for (var i = 0; i < rows6; i++) {
    var asterisk = "";
    for (var j = 0; j < rows6; j++) {
        if ( i <= j ) {
            asterisk = asterisk + "*";
        } else {
            asterisk = asterisk + " ";
        }
    }
    for (var k = rows6-1; k > i; k--) {
        if ( k > i ) {
            asterisk = asterisk + "*";
        } else {
            asterisk = asterisk + " ";
        }
    }
    console.log(asterisk);
}