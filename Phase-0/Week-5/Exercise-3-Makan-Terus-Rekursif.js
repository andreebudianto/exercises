/* Phase 0 Week 5 Exercise 3 */
/* Makan Terus Rekursif */

function makanTerusRekursif(waktu) {
    // Selama waktu masih diatas 0 maka tambahkan nilai return + 1 dan lakukan fungsi rekursif itu lagi dengan parameter waktu - 15
    if (waktu > 0) {
        return 1 + makanTerusRekursif(waktu-15);
    } 
    // Jika sudah tidak ada waktu lagi maka kembalikan nilai 0 dan berhenti dari rekursif
    else {
        return 0;
    }
}


console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0