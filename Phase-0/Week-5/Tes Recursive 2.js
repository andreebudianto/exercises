function sum(input) {
    // Jika sudah tidak ada angka lagi maka kembalikan nilai 0
    if (input.length === 0 ) {
        return 0;
    }
    // Deklarasi variabel angka untuk menentukan apakah input sekarang angka atau object
    var angka;
    // Jika input berupa array atau object maka lakukan fungsi rekursif lagi untuk mendapatkan nilai number
    if(typeof input[0] === 'object') {
        angka = sum(input[0]);
    } 
    // Jika input sudah berupa angka maka tambahkan angka tersebut untuk faktor penambahan
    else {
        angka = input[0];
    }
    // Lakukan penjumlahan faktor penambahan dari masing-masing data dalam array
    return angka + sum(input.slice(1));
}


console.log(sum([
    [
        1,
        2,
        [
            34,
            [3,7,3,1],
            33
        ]
    ],
    [3,4,5],
    [6,7,8,9]
]))