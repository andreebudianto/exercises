/* Phase 0 Week 3 Exercise 14 */
/* Kelompok Angka */

function mengelompokkanAngka(arr) {
    // Deklarasi variabel array untuk menampung angka genap, ganjil, kelipatan 3, dan hasil gabung
    var arrEven = [];
    var arrOdd = [];
    var arrThird = [];
    var arrResult = [];
    // Lakukan perulangan untuk mengecek angka pada input array
    length = arr.length;
    for (var i = 0; i < length; i++) {
        // Jika data habis dibagi 2 maka masukkan ke array genap
        if ( (arr[i] % 2) === 0 ) {
            // Apabila angka tersebut habis dibagi 3 maka masukkan ke dalam array kelipatan 3
            if ( (arr[i] % 3) === 0 ) {
                arrThird.push(arr[i]);
            } else {
                arrEven.push(arr[i]);
            }
        } else {
            // Jika data tidak habis dibagi 2 maka masukkan ke array ganjil
            // Apabila angka tersebut habis dibagi 3 maka masukkan ke dalam array kelipatan 3
            if ( (arr[i] % 3) === 0 ) {
                arrThird.push(arr[i]);
            } else {
                arrOdd.push(arr[i]);
            }
        }
    }
    // Masukkan ketiga array ke dalam array result
    arrResult.push(arrEven);
    arrResult.push(arrOdd);
    arrResult.push(arrThird);
    return arrResult;
}

console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]