/*
  ================
  Format Uang (KBBI)
  ================

  [INSTRUCTIONS]

  formatUang adalah sebuah function yang menerima satu parameter berupa number.
  function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
  Rp1.500,00

  [RULE]
  - Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
  - Dilarang menggunakan regex .match dan lainnya!
*/

function formatUang(number) {
  // Buat variabel string baru untuk menampung hasil rupiah
  var newString = "";
  // Convert bentuk number menjadi string agar dapat dilooping
  var string = number.toString();
  // Buat counter untuk menghitung apakah index saat ini adalah kelipatan 3
  var counter = 0;
  // Lakukan perulangan dari belakang untuk mendapatkan hasil rupiah
  for (var i = string.length-1; i >= 0; i--) {
    // Tambahkan nilai counter terlebih dahulu
    counter++;
    // Jika counter kelipatan 3 dan bukan index awal tambahkan titik (.) + number saat itu + newString serta reset counter menjadi 0
    if ( (counter % 3 === 0) && (i !== 0) ) {
      newString = "." + string[i] + newString;
      counter = 0;
    } 
    // Jika tidak maka cukup tambahkan number saat itu di depan newString
    else {
      newString = string[i] + newString;
    }
  }
  // Tambahkan hasil newString dengan Rp di depan dan ,00 di belakang
  return "Rp" + newString + ",00";
}

console.log(formatUang(7500)); // Rp7.500,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(100000)); // Rp100.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(4999999)); // Rp4.999.999,00
