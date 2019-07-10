/* Phase 0 Week 5 Exercise 5 */
/* Kali Terus Rekursif */

function kaliTerusRekursif(angka) {
    // Selama angka diatas nol maka lakukan proses rekursif
    if (angka > 0) {
        // Pertama-tama harus ubah dulu format angka menjadi string agar dapat dipotong
        var str = angka.toString();
        // Ambil digit pertama dan konversi ke dalam bentuk angka untuk ditambahkan pada hasil akhir
        var strAwal = str.slice(0,1);
        var angkaAwal = parseInt(strAwal);
        // Ambil sisa digit angka setelahnya untuk dapat dijadikan parameter rekursif berikutnya
        var strAkhir = str.slice(1);
        var angkaAkhir = parseInt(strAkhir);
        // Hitung total digit angka pertama
        return angkaAwal + totalDigitRekursif(angkaAkhir);
    }
    // Jika sudah tidak ada angka lagi maka stop rekursif
    else {
        return 0;
    }
} 


console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6