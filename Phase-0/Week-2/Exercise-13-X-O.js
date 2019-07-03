/* Phase 0 Week 2 Exercise 13 */
/* Program X and O */

function xo(str) {
    var length = str.length;
    var x = 0;
    var o = 0;
    for (var i = 0; i < length; i++) {
        if (str[i] === "x") {
            x++;
        }
        else if (str[i] === "o") {
            o++;
        }
    }
    if (x === o) {
        return true;
    } else {
        return false;
    }
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true