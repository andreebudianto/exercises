/* Phase 0 Week 4 Exercise 6 */
/* Digit Perkalian Minimum */

function digitPerkalianMinimum(angka) {
    // Deklarasi variabel mindigit untuk menampung digit perkalian minimum
    var mindigit = 0;
    // Lakukan nested for untuk mendapatkan faktor perkalian yang menghasilkan angka tersebut
    for (var i = 1; i <= angka; i++) {
        for (var j = 1; j <= angka; j++) {
            // Jika hasil perkalian i dan j adalah angka
            if ( (i * j) === angka) {
                // Ubah faktor perkalian menjadi bentuk string dan digabungkan untuk menghitung jumlah digit perkalian
                var faktor1 = i.toString();
                var faktor2 = j.toString();
                var gabung = faktor1 + faktor2;
                var digit = gabung.length;
                // Jika mindigit belum ada nilai maka tampung nilai digit sekarang
                if (mindigit === 0) {
                    mindigit = digit;
                } 
                // Jika digit sekarang lebih kecil daripada mindigit maka gantikan nilai mindigit dengan digit sekarang
                else if (mindigit > digit) {
                    mindigit = digit;
                }
            }
        }
    }
    return mindigit;
}

console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2