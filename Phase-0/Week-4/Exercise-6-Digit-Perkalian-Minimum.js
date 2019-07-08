/* Phase 0 Week 4 Exercise 6 */
/* Digit Perkalian Minimum */

function digitPerkalianMinimum(angka) {
    var digit = 0;
    for (var i = 1; i <= angka; i++) {
        var faktor1 = 0;
        var faktor2 = 0;
        var gabung = "";
        if (angka % i === 0) {
            faktor1 = i;
            faktor2 = angka / i;
            return i;
        }
    }
    // for (var j = 0; j < bagi1.length; j++) {
    //     var jumlah = 0;
    //     jumlah = bagi1[i].length + bagi2[i].length;
    //     if (digit === 0) {
    //         digit = jumlah;
    //     } else if (digit > jumlah) {
    //         digit = jumlah;
    //     }
    // }
    // return digit;
}

console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2