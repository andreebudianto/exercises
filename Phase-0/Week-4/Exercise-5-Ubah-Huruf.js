/* Phase 0 Week 4 Exercise 5 */
/* Ubah Huruf */

function ubahHuruf(kata) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var newWord = "";
    var length = kata.length;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < alphabet.length; j++) {
            if (kata[i] === alphabet[j] && j === alphabet.length-1) {
                newWord = newWord + alphabet[0];
            } else if (kata[i] === alphabet[j]) {
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