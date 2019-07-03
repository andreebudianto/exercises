/* Phase 0 Week 3 Exercise 10 */
/* Perkalian Unik */

function perkalianUnik(arr) {
    // Deklarasi variable array baru untuk menampung hasil perkalian
    var arrResult = [];
    var length = arr.length;

    // Lakukan perulangan untuk setiap data dalam array
    for (var i = 0; i < length; i++) {
        // Deklarasi variable dengan nilai 1 untuk total perkalian
        var total = 1;
        // Lakukan perulangan untuk mendapatkan hasil kali setiap data selain data sekarang
        for (var j = 0; j < length; j++) {
            if (i !== j) {
                total = total * arr[j];
            }
        }
        // Masukkan hasil perkalian ke dalam array baru
        arrResult.push(total);
    }
    return arrResult;
}

console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]