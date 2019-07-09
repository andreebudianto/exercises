/* Phase 0 Week 4 Exercise 4 */
/* Mencari Modus */

function cariModus(arr) {
    // Deklarasi variabel modus untuk menampung nilai modus yang ditemukan
    var modus = 0;
    // Deklarasi variabel most untuk menampung jumlah char yang paling banyak muncul
    var most = 1;
    // Deklarasi variabel counter untuk menghitung jumlah char yang muncul saat ini
    var counter = 0;
    // Deklarasi variabel untuk menghitung total counter yang ditemukan
    var total = 0;
    // Lakukan nested for untuk mencari jumlah char yang muncul
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        counter = 0;
        for (var j = 0; j < length; j++) {
            // Jika char saat ini sama dengan char yang dicari maka tambah counter
            if (arr[i] === arr[j]) {
                counter++;
            }
        }
        // Jika nilai counter lebih besar daripada most saat ini maka gantikan most dengan counter dan set modus dengan char saat ini
        if (counter > most) {
            most = counter;
            modus = arr[i];
        }
        // Tambahkan counter yang ditemukan ke dalam variabel total
        total = total + counter;
    }
    // Jika rata-rata counter yang ditemukan sama dengan jumlah counter paling banyak ditemukan maka bukan modus
    if ( (total/length) === most ) {
        modus = -1;
    }
    return modus;
}

console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1