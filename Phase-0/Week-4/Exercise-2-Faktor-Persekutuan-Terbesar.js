/* Phase 0 Week 4 Exercise 2 */
/* Faktor Persekutuan Terbesar */

function fpb(angka1, angka2) {
    // Deklarasi awal variabel untuk menampung fpb
    var fpb = 0;
    // Deklarasi awal variabel untuk menampung angka terbesar dari 2 angka parameter
    var terbesar = 0;
    if (angka1 > angka2) {
        terbesar = angka1;
    } else {
        terbesar = angka2;
    }
    // Lakukan perulangan sebanyak angka terbesar dan modulus masing-masing angka dengan counter
    // Apabila counter dapat modulus kedua angka maka set fpb menjadi angka counter
    for (var i = 1; i < terbesar; i++) {
        if ( (angka1 % i === 0) && (angka2 % i === 0) ) {
            fpb = i;
        }
    }
    // Tampilkan fpb terakhir
    return fpb;
}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1