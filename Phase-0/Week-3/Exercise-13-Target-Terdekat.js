/* Phase 0 Week 3 Exercise 13 */
/* Target Terdekat */

function targetTerdekat(arr) {
    // Deklarasi variabel array untuk menampung index dari char x dan o
    var charo = [];
    var charx = [];
    // Lakukan perulangan untuk memasukkan index x dan o apabila ditemukan
    length = arr.length;
    for (var i = 0; i < length; i++) {
        if (arr[i] === "o") {
            charo.push(i);
        } else if (arr[i] === "x") {
            charx.push(i);
        }
    }
    // Jika tidak ditemukan char x maka tampilkan hasil 0
    if (charx.length === 0) {
        return 0;
    } else {
        // Jika tidak maka lakukan perulangan untuk mencari selisih index char x dan 0
        var olength = charo.length;
        var xlength = charx.length;
        // Deklarasi awal char shortest untuk menampung angka paling kecil
        var shortest = 0;
        for (var o = 0; o < olength; o++) {
            for (var x = 0; x < xlength; x++) {
                // Deklarasi variable diff untuk menampung selisih index char x dan o
                var diff = 0;
                // Gunakan fitur absolute untuk mencari selisih jarak
                diff = Math.abs(charx[x] - charo[o]);
                // Jika variable shortest masih nol maka masukkan nilai diff
                if (shortest === 0) {
                    shortest = diff;
                } else {
                    // Apabila tidak nol maka lakukan perbandingan dengan diff jika diff lebih kecil maka jadikan sebagai char shortest
                    if (shortest > diff) {
                        shortest = diff;
                    }
                }
            }
        }
        return shortest;
    }
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2