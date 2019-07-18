/*
  /////////////////////
  FUNCTION TUKAR GANJIL
  /////////////////////

  Fungsi Tukar Ganjil akan mengubah besar dan kecil huruf apabila berada di index yang ganjil.

  [PROCESS]

  INPUT:
  'Dana K'
  PROCESS:
  1 => d (karena 1 ganjil)
  2 => a
  3 => N (karena 3 ganjil)
  4 => a
  5 => ' ' (diabaikan)
  6 => K
  OUTPUT:
  daNa K

  [RULES]

  - Dilarang menggunakan built in function apapun
*/

function tukarGanjil(kalimat) {
  // Buat variabel newString untuk menampung hasil convert
  var newString = "";
  // Buat counter untuk mengecek huruf yang sekarang ganjil atau genap
  var counter = 1;
  // Lakukan perulangan sepanjang kalimat
  var length = kalimat.length;
  for (var i = 0; i < length; i++) {
    // Jika counter sekarang ganjil maka ubah case pakai function changeCase()
    if (counter % 2 !== 0) {
      newString = newString + changeCase(kalimat[i]);
    } 
    // Jika counter sekarang genap maka tidak perlu diubah case nya
    else {
      newString = newString + kalimat[i];
    }
    // Naikkan counter
    counter++;
  }
  return newString;
};

// Buat function untuk menukar huruf kecil ke besar atau sebaliknya
function changeCase(string) {
  // Buat variabel newString untuk menampung hasil convert case
  var newString = "";
  // Deklarasi master alphabet
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Lakukan looping sepanjang string untuk mengubah semua string yang ada
  for (var i = 0; i < string.length; i++) {
    // Cek apakah dia huruf kecil atau besar
    for (var j = 0; j < lower.length; j++) {
      // Jika huruf kecil maka ubah menjadi huruf besar
      if (string[i] === lower[j]) {
        newString = newString + upper[j];
      } 
      // Jika huruf besar maka ubah menjadi huruf kecil
      else if (string[i] === upper[j]) {
        newString = newString + lower[j];
      }
    }
  }
  // Jika string tidak ditemukan pada master alphabet maka tambahkan string
  if (newString.length === 0) {
    newString = string;
  }
  return newString;
}

// TEST CASES
console.log(tukarGanjil('Hello World')); // "heLlO woRlD"
console.log(tukarGanjil('I aM aLAY')); // "i AM alAy"
console.log(tukarGanjil('My Name is Bond!!')); // "my NAmE Is BOnD!!"
console.log(tukarGanjil('IT sHOULD bE me')); // "iT shOuLd BE mE"
console.log(tukarGanjil('001-A-3-5TrdYW')); // "001-a-3-5TRdyW"