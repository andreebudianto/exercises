/* Phase 0 Week 3 Exercise 12 */
/* Deret Geometri */

function tentukanDeretGeometri(arr) {
    var diff = 0;
    var total = 0;
    var length = arr.length;
    // Lakukan perulangan untuk mendapatkan total selisih bagi
    for (var i = 0; i < length; i++) {
        if (i !== length-1) {
            diff = 0;
            diff = parseInt(arr[i+1]) / parseInt(arr[i]);
        }
        total = total + diff;
    }
    // Hitung jumlah rata-rata selisih bagi
    var average = total / (length);
    // Apabila hasil rata-rata sama dengan selisih maka deret geometri
    if (average === diff) {
        return true;
    } else {
        return false;
    }
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false