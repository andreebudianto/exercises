/* Phase 0 Week 4 Exercise 8 */
/* Tukar Besar Kecil */

function tukarBesarKecil(kalimat) {
    // Deklarasi deret abjad kecil sebagai master untuk mengganti huruf kecil
    var kecil = "abcdefghijklmnopqrstuvwxyz";
    // Deklarasi deret abjad besar sebagai master untuk mengganti huruf besar
    var besar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Deklarasi variabel newWord untuk menampung string yang telah diubah
    var newWord = "";
    // Lakukan perulangan untuk mengganti huruf satu per satu dari awal
    var length = kalimat.length;
    // Pakai nested for agar mengganti setiap huruf yang ada ditambah 1 sesuai dengan master alphabet
    for (var i = 0; i < length; i++) {
        // Deklarasi variabel flag untuk menentukan karakter sudah ditemukan atau belum
        var flag = false;
        // Lakukan pencarian pada master huruf kecil
        for (var j = 0; j < kecil.length; j++) {
            // Jika huruf yang ditemukan adalah huruf kecil maka ganti dengan huruf besar
            if (kalimat[i] === kecil[j]) {
                newWord = newWord + besar[j];
                flag = true;
            }
        }
        // Jika huruf kecil tidak ditemukan maka cari pada master huruf besar
        if (flag === false) {
            for (var k = 0; k < besar.length; k++) {
                // Jika huruf yang ditemukan adalah huruf besar maka ganti dengan huruf kecil
                if (kalimat[i] === besar[k]) {
                    newWord = newWord + kecil[k];
                    flag = true;
                }
            }
        }
        // Jika huruf bukan kecil / besar maka tampilkan huruf tersebut
        if (flag === false) {
            newWord = newWord + kalimat[i];
            flag = true;
        }
    }
    return newWord;
}

console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"