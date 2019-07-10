/* Phase 0 Week 5 Exercise 4 */
/* Total Digit Rekursif */

function totalDigitRekursif(angka) {
    // Pertama-tama harus ubah dulu format angka menjadi string agar dapat dipotong
    var str = angka.toString();
    // Selama angka diatas nol maka lakukan proses rekursif
    if (str.length > 1) {
        // Ambil digit pertama dan konversi ke dalam bentuk angka untuk ditambahkan pada hasil akhir
        var angkaAwal = parseInt(str[0]);
        // Ambil sisa digit angka setelahnya untuk dapat dijadikan parameter rekursif berikutnya
        var angkaAkhir = parseInt(str.slice(1));
        // Hitung total digit angka pertama
        return angkaAwal + totalDigitRekursif(angkaAkhir);
    }
    // Jika sudah tidak ada angka lagi maka stop rekursif
    else {
        return angka;
    }
    // --------------- Method Split Array ---------------
    // if (angka > 0) {
    //     var str = angka.toString();
    //     var arr = str.split("");
    //     var arrAngka = arr[0];
    //     var angkaAwal = parseInt(arrAngka);
    //     arr.shift();
    //     var arrJoin = arr.join("");
    //     var newAngka = parseInt(arrJoin);
    //     return angkaAwal + totalDigitRekursif(newAngka);
    // }
    // else {
    //     return 0;
    // }
} 


console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5