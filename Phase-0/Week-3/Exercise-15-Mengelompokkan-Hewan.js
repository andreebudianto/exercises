/* Phase 0 Week 3 Exercise 15 */
/* Kelompok Hewan */

function groupAnimals(arr) {
    // Deklarasi variable arrDouble untuk menampung array sementara hewan yang berinisial sama
    var arrDouble = [];
    // Deklarasi variable arrResult untuk menampung hasil arrDouble
    var arrResult = [];
    // Create array baru untuk menampung hasil sort array (ambil nilai array dengan menggunakan method slice agar tidak mempengaruhi array awal)
    var arrSort = arr.slice();
    arrSort.sort();
    // Deklarasi initial awal sebagai pembanding initial pada perulangan
    var initAwal = "";
    var length = arr.length;
    // Lakukan perulangan untuk setiap data dalam array yang sudah di sort
    for (var i = 0; i < length; i++) {
        // Ambil initial pertama setiap data
        var initSort = arrSort[i].substr(0,1);
        // Bandingkan apabila initial tidak sama dengan initial sebelumnya maka lakukan proses push
        if (initAwal !== initSort) {
            // Lakukan perulangan untuk mencari data yang memiliki initial yang sama
            for (var j = 0; j < length; j++) {
                var initArray = arr[j].substr(0,1);
                // Jika ditemukan initial yang sama maka push data ke arrDouble
                if (initSort === initArray) {
                    arrDouble.push(arr[j]);
                }
            }
            // Apabila sudah tidak ada data yang double maka push ke arrResult sebagai hasil akhir
            arrResult.push(arrDouble);
            // Kosongkan arrDouble agar dapat diisi dengan data baru
            arrDouble = [];
            // Ganti initial sebelumnya untuk mengecek initial berikutnya
            initAwal = initSort;
        }
    }
    return arrResult;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]