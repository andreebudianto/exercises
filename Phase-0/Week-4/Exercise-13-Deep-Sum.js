/* Phase 0 Week 4 Exercise 13 */
/* Deep Sum */

function deepSum (arr) {
    // Pertama cari panjang array utama
    var arrLength = arr.length;
    // Jika ditemukan data maka mulai perhitungan
    if (arrLength > 0) {
        // Deklarasi variabel result untuk menampung total penjumlahan semua
        var result = 0;
        // Lakukan perulangan sebanyak panjang array
        for (var i = 0; i < arrLength; i++) {
            // Reset penjumlahan untuk array dimensi 1
            var firstsum = 0;
            // Cari panjang array dimensi 1 untuk dilakukan perulangan mencari nilai sum dimensi 2
            var firstArrLength = arr[i].length;
            for (var j = 0; j < firstArrLength; j++) {
                // Reset penjumlahan untuk array dimensi 2
                var secondsum = 0;
                // Lakukan perulangan sebanyak jumlah data yang ada pada array dimensi 2
                var secondArrLength = arr[i][j].length;
                for (var k = 0; k < secondArrLength; k++) {
                    secondsum = secondsum + arr[i][j][k];
                }
                // Masukkan nilai penjumlahan array dimensi 2 agar dapat dikalkulasi lagi untuk array dimensi 1
                firstsum = firstsum + secondsum;
            }
            // Masukkan total nilai penjumlahan yang ada pada dimensi 1 dan 2
            result = result + firstsum;
        }
        return result;
    } 
    // Jika tidak ditemukan maka tampilkan pesan error
    else {
        return "No number";
    }
}


console.log(deepSum([
[
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
],
[
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
],
[
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
]
])); // 316

console.log(deepSum([
[
    [20, 10],
    [15],
    [1, 1]
],
[
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
],
[
    [3, 5, 1],
    [1, 5, 3],
    [1]
],
[
    [2]
]
])); // 156

console.log(deepSum([])); // No number