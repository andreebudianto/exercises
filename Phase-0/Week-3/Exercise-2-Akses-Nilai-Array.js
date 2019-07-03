/* Phase 0 Week 3 Exercise 2 */
/* Akses Nilai Dalam Array */

function balikString(string) {
    var reverseString = "";
    for (var i = string.length; i > 0; i--) {
        reverseString = reverseString + string[i-1];
    }
    console.log(reverseString);
}

balikString('hello world!');