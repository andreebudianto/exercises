/* Phase 0 Week 5 Exercise 13 */
/* Most Frequent Largest Numbers */

function sorting(arrNumber) {
    // Buat array baru untuk disort
    var array = [];
    // Buat flag untuk penanda kapan harus dilakukan rekursif
    var flag = false;
    // Lakukan perulangan untuk mengcopy isi dalam arrNumber
    var length = arrNumber.length;
    for (var i = 0; i < length; i++) {
        array.push(arrNumber[i]);
    }
    // Lakukan perulangan untuk mengecek setiap value sudah berurut atau belum
    for (var i = 0; i < length - 1; i++) {
        // Jika ditemukan angka yang tidak berurut maka lakukan swap dan aktifkan flag rekursif
        if (array[i] > array[i+1]) {
            var temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
            flag = true;
        }
    }
    // Jika flag true maka lakukan rekursif
    if (flag === true) {
        return sorting(array);
    } 
    // Jika tidak maka tampilkan array
    else {
        return array;
    }

    // ---------------------- Method While ------------------------
    // // Buat array baru untuk menampung array yang akan disort
    // var array = [];
    // var length = arrNumber.length;
    // // Lakukan perulangan untuk mengcopy setiap value pada arrNumber kedalam array baru
    // for (var i = 0; i < length; i++) {
    //     array.push(arrNumber[i]);
    // }
    // // Lakukan perulangan untuk mengurutkan nilai dalam array
    // var swap = true;
    // while (swap) {
    //     // Set kondisi swap menjadi false agar apabila sudah selesai di sort bisa keluar dari loop
    //     swap = false;
    //     // Cek setiap angka dalam array apakah sudah berurutan atau belum
    //     for (var i = 0; i < length - 1; i++) {
    //         // Jika masih ditemukan angka yang belum berurutan maka tukar nilai tersebut dan hidupkan flag swap agar bisa dilakukan perulangan lagi
    //         if (array[i] > array[i+1]) {
    //             // Tukar nilai array indeks sekarang dengan indeks berikutnya dengan bantuan variabel temp
    //             var temp = array[i];
    //             array[i] = array[i+1];
    //             array[i+1] = temp;
    //             swap = true;
    //         }
    //     }
    // }
    // return array;
}

function getTotal(arrNumber) {
    // Buat variabel largest untuk menampung nilai terbesar
    var largest = 0;
    // Buat variabel most untuk menampung counter muncul angka largest
    var most = 0;
    // Lakukan perulangan untuk mencari nilai largest dan most
    var arrLength = arrNumber.length;
    for (var i = 0; i < arrLength; i++) {
        // Jika angka sekarang lebih besar dari pada largest maka ganti nilai largest
        if (arrNumber[i] > largest) {
            largest = arrNumber[i];
            most = 0;
            // Lakukan perulangan untuk mencari counter muncul angka largest
            for (var j = 0; j < arrLength; j++) {
                if (arrNumber[i] === arrNumber[j]) {
                    most++;
                }
            }
        }
    }
    // Jika array tidak kosong maka tampilkan pesan berikut
    if (largest !== 0 || most !== 0) {
        return "angka paling besar adalah " + largest + " dan jumlah kemunculan sebanyak " + most + " kali";
    } else {
        return "";
    }
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''