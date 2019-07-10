/* Phase 0 Week 5 Exercise 17 */
/* Kali Terus Rekursif */

function kaliTerusRekursif(angka) {
    // Pertama-tama harus ubah angka menjadi string
    var str = angka.toString();
    // Jika digit angka lebih dari satu maka kalikan lagi
    if (str.length > 1) {
        // Set variabel total = 1 agar dapat mencari total perkalian digit saat ini
        var total = 1;
        for (var i = 0; i < str.length; i++) {
            // Lakukan perkalian semua digit angka
            total = total * parseInt(str[i]);
        }
        // Lakukan fungsi rekursif lagi dengan hasil total perkalian tadi
        return kaliTerusRekursif(total);
    }
    // Jika tidak maka tampilkan angka hasil perkalian sisa 1 digit
    else {
        return angka;
    }
} 


console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6