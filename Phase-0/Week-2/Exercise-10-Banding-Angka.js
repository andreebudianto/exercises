/* Phase 0 Week 2 Exercise 10 */
/* Program Number Comparison */

function bandingkanAngka(angka1, angka2) {
    if (angka1 < angka2) {
        return true;
    }
    else if (angka1 > angka2) {
        return false;
    }
    else if (angka1 === angka2) {
        return "-1";
    }
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false