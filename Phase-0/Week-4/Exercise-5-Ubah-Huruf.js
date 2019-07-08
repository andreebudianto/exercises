/* Phase 0 Week 4 Exercise 5 */
/* Ubah Huruf */

function ubahHuruf(kata) {
    // Deklarasi deret alphabet sebagai master untuk mengganti huruf selanjutnya
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    // Deklarasi variabel newWord untuk menampung string yang telah diubah
    var newWord = "";
    // Lakukan perulangan untuk mengganti huruf satu per satu dari awal
    var length = kata.length;
    // Pakai nester for agar mengganti setiap huruf yang ada ditambah 1 sesuai dengan master alphabet
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < alphabet.length; j++) {
            // Jika huruf yang ditemukan adalah z (paling akhir) maka set huruf menjadi a (kembali ke awal)
            if (kata[i] === alphabet[j] && j === alphabet.length-1) {
                newWord = newWord + alphabet[0];
            }
            // Jika huruf bukan abjad terakhir maka ubah huruf menjadi abjad selanjutnya 
            else if (kata[i] === alphabet[j]) {
                newWord = newWord + alphabet[j+1];
            }
        }
    }
    return newWord;
}

console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu