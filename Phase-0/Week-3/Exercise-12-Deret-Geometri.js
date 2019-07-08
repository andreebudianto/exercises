/* Phase 0 Week 3 Exercise 12 */
/* Deret Geometri */

function tentukanDeretGeometri(arr) {
    // Deklarasi variabel diff1 untuk mencari selisih awal
    var diff1 = parseInt(arr[1]) / parseInt(arr[0]);
    // Deklarasi variabel diff2 untuk menampung selisih berikutnya
    var diff2 = 0;
    // Deklarasi flag dengan nilai awal true
    var flag = true;
    // Cari panjang array untuk perulangan
    var length = arr.length;
    // Lakukan perulangan untuk mendapatkan selisih berikutnya
    for (var i = 1; i < length-1; i++) {
        // Reset angka selisih diff2 untuk perbandingan selisih selanjutnya
        diff2 = 0;
        diff2 = parseInt(arr[i+1]) / parseInt(arr[i]);
        // Jika selisih selanjutnya tidak sama dengan selisih awal maka set flag menjadi false
        if (diff1 !== diff2) {
            flag = false;
        }
    }
    return flag;
    

    // ----------------- Average Method ----------------
    // var diff = 0;
    // var total = 0;
    // var length = arr.length;
    // // Lakukan perulangan untuk mendapatkan total selisih bagi
    // for (var i = 0; i < length; i++) {
    //     if (i !== length-1) {
    //         diff = 0;
    //         diff = parseInt(arr[i+1]) / parseInt(arr[i]);
    //     }
    //     total = total + diff;
    // }
    // // Hitung jumlah rata-rata selisih bagi
    // var average = total / (length);
    // // Apabila hasil rata-rata sama dengan selisih maka deret geometri
    // if (average === diff) {
    //     return true;
    // } else {
    //     return false;
    // }
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false