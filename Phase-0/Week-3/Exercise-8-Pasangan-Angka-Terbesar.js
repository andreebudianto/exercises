/* Phase 0 Week 3 Exercise 8 */
/* Pasangan Angka Terbesar */

function pasanganTerbesar(angka) {
    // Dekralasi variable untuk menampung pasangan angka terbesar
    var maxNum = 0;

    // Ubah tipe data angka menjadi string agar dapat di pecah
    var strAngka = angka.toString();
    var length = strAngka.length;
    for (var i = 0; i < length; i++) {
        // Deklarasi variable sementara untuk menampung pasangan angka dalam bentuk string
        var strMaxNum = "";
        // Jika angka yang diproses adalah angka terakhir maka slice 1
        if (i === length-1) {
            strMaxNum = strAngka.slice(i, i+1);   
        } else {
            strMaxNum = strAngka.slice(i, i+2);
        }
        // Ubah tipe data strMaxNum menjadi integer agar dapat dibandingkan
        var maxNumTemp = parseInt(strMaxNum);
        // Jika nilai data maxNumTemp lebih besar maka gantikan data maxNum yang sudah ada
        if (maxNumTemp > maxNum) {
            maxNum = maxNumTemp;
        }
    }
    return maxNum;
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99