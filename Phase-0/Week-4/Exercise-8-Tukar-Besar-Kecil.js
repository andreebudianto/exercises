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
    // Pakai nester for agar mengganti setiap huruf yang ada ditambah 1 sesuai dengan master alphabet
    for (var i = 0; i < length; i++) {
        var flag = true;
        for (var j = 0; j < kecil.length; j++) {
            // Jika huruf yang ditemukan adalah z (paling akhir) maka set huruf menjadi a (kembali ke awal)
            if (kalimat[i] === kecil[j]) {
                newWord = newWord + besar[j];
                flag = false;
            }
        }
        if (flag === true) {
            for (var k = 0; k < besar.length; k++) {
                // Jika huruf yang ditemukan adalah z (paling akhir) maka set huruf menjadi a (kembali ke awal)
                if (kalimat[i] === besar[k]) {
                    newWord = newWord + kecil[k];
                    flag = false;
                }
            }
        }
        if (flag === true) {
            newWord = newWord + kalimat[i];
            flag = false;
        }
    }
    return newWord;
}

console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"