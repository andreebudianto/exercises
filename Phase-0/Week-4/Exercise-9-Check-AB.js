/* Phase 0 Week 4 Exercise 9 */
/* Check AB */

function checkAB(str) {
    // Deklarasi variabel array untuk menampung index dari char a dan b
    var chara = [];
    var charb = [];
    // Lakukan perulangan untuk memasukkan index a dan b apabila ditemukan
    length = str.length;
    for (var i = 0; i < length; i++) {
        if (str[i] === "a") {
            chara.push(i);
        } else if (str[i] === "b") {
            charb.push(i);
        }
    }
    // Jika tidak ditemukan char a / char b maka tampilkan hasil false
    if (chara.length === 0 || charb.length === 0) {
        return false;
    } else {
        // Jika ada a atau b maka lakukan perulangan untuk mencari selisih index char a dan b
        var alength = chara.length;
        var blength = charb.length;
        // Deklarasi variabel arrdiff untuk menampung semua selisih index
        var arrdiff = [];
        for (var a = 0; a < alength; a++) {
            for (var b = 0; b < blength; b++) {
                // Deklarasi variable diff untuk menampung sementara selisih index char a dan b
                var diff = 0;
                // Gunakan fitur absolute untuk mencari selisih jarak
                diff = Math.abs(chara[a] - charb[b]);
                // Masukkan hasil diff ke dalam variabel array diff
                arrdiff.push(diff);
            }
        }
        // Set flag untuk menentukan apakah ada ditemukan jarak minimal 3 karakter
        var flag = false;
        for (var j = 0; j < arrdiff.length; j++) {
            // Jika ditemukan setidaknya satu kali saja jarak minimal 3 karakter maka set flag menjadi true
            if (arrdiff[j] === 4) {
                flag = true;
            }
        }
        return flag;
    }
}

console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false