/* Phase 0 Week 3 Exercise 11 */
/* Deret Aritmatika */

function tentukanDeretAritmatika(arr) {
    var diff = 0;
    var total = 0;
    length = arr.length;
    // Lakukan perulangan untuk mendapatkan total selisih
    for (var i = 0; i < length; i++) {
        if (i !== length-1) {
            diff = 0;
            diff = parseInt(arr[i+1]) - parseInt(arr[i]);
        }
        total = total + diff;
    }
    // Hitung jumlah rata-rata selisih
    var average = total / (length);
    // Apabila hasil rata-rata sama dengan selisih maka deret aritmatika
    if (average === diff) {
        return true;
    } else {
        return false;
    }
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false