/* Phase 0 Week 2 Exercise 12 */
/* Program Minute Convertion */

function konversiMenit(menit) {
    var hour = Math.floor(menit / 60);
    var minute = menit % 60;
    var strminute = minute.toString();
    if (strminute.length < 2) {
        strminute = "0" + strminute;
    }
    return hour + ":" + strminute;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00