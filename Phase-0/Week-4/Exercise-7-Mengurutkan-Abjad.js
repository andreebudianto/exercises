/* Phase 0 Week 4 Exercise 7 */
/* Mengurutkan Abjad */

function urutkanAbjad(str) {
    // Pertama harus ubah string kedalam bentuk array agar dapat disusun
    var arrstr = [];
    var length = str.length;
    for (var i = 0; i < length; i++) {
        arrstr.push(str[i]);
    }
    // Lakukan proses bubble sorting
    var swap = true;
    var arrlength = arrstr.length - 1;
    // Selama masih bisa diswap maka lakukan swap karakter yang lebih besar
    while (swap) {
        // Apabila tidak dapat di swap lagi maka ubah flag menjadi false agar keluar dari loop
        swap = false;
        // Cek setiap karakter jika karakter saat ini lebih besar dari karakter setelahnya maka lakukan swap karakter
        for (var j = 0; j < arrlength; j++) {
            if (arrstr[j] > arrstr[j+1]) {
                // Buat variabel konstanta untuk menyimpan karakter saat ini
                const temp = arrstr[j];
                // Ubah karakter sekarang menjadi karakter yang lebih kecil
                arrstr[j] = arrstr[j+1];
                // Ubah karakter setelahnya menjadi karakter yang lebih besar
                arrstr[j+1] = temp;
                // Ubah flag swap menjadi true agar dapat loop lagi hingga semua karakter berurutan
                swap = true;
            }
        }
    }
    // Deklarasi variabel untuk menggabungkan hasil array karakter yang telah disusun
    var newstr = arrstr.join("");
    return newstr;

    // --------- Function Build In ----------
    // var arrstr = [];
    // var newstr = "";
    // var length = str.length;
    // var counter = length;
    // for (var i = 0; i < length; i++) {
    //     arrstr.push(str[i]);
    // }
    // arrstr.sort();
    // for (var i = 0; i < length; i++) {
    //     newstr = newstr + arrstr[i];
    // }
    // return newstr;
}

console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'