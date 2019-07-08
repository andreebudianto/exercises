/* Phase 0 Week 4 Exercise 1 */
/* Angka Prima */

function angkaPrima(angka) {
    // Syarat angka prima adalah harus lebih besar dari 1 dan habis dibagi oleh 1 atau angka itu sendiri
    // Jika angka lebih besar dari 1 maka dilakukan proses pencarian angka prima
    if (angka > 1) {
        // Jika angka adalah 2 maka return true karena 2 adalah angka prima
        if (angka === 2) {
            return true;
        } else {
            // Lakukan perulangan untuk membagi angka tersebut dengan angka sebelumnya apabila ditemukan faktor pembagi sebelum angka tersebut berarti bukan angka priima
            for (var i = 2; i < angka; i++) {
                if (angka % i === 0) {
                    return false;
                }
            }
            // return true apabila tidak ditemukan faktor pembagi selain angka itu sendiri
            return true;
        }
    } else {
        return false;
    }
}

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false