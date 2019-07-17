/*
  CHANGE WORDS
  Change words adalah sebuah fungsi yang menerima input
  berupa multi dimensional array yang berisi kata dan
  akan mengembalikan nilai baru berupa array multidimensional yang sudah diubah kata-katanya.

  RULES:
  1. Asumsi index row dan col selalu dimulai dari 0
  2. Pertambahan index row dan col akan menentukan bagaimana kata tersebut akan diolah:
    a. Apabila hasil pertambahan adalah bilangan prima maka hilangkan semua huruf vokal (a, e, i, u, o)
    b. Apabila hasil pertambahan adalah angka genap maka balik atau reversed kata tersebut
    c. Apabila hasil pertambahan adalah angka ganil maka ubah semua menjadi huruf besar

  EXAMPLE:
  INPUT: [
    ["cat", "fish"],
    ["dog", "cow"]
  ]
  OUTPUT: [
      ["tac", "FISH"],
      ["DOG", "wc"]
    ]

  EXPLANATION
    1. pertambahan index pada kata "cat" 0 berarti dia hanya bilangan genap sehingga kata "cat" dibalik menjadi "tac"
    2. pertambahan index pada kata "fish" dan "dog" adalah bilangan ganjila sehingga kedua kata tersebut diubah ke huruf besar
    3. Pertambahan pada kata "cow" adalah bilangan genap dan prima sehingga kata tersebut dibalik dan dihilangkan huruf vokalnya

  RULES:
    1. dilarang menggunakan built in function .split, .reversed, .join, .filter, .map dan sejenisnya
*/

function changeWords(words) {
  // Lakukan perulangan sebanyak array words dimensi pertama
  for (var i = 0; i < words.length; i++) {
    // Lakukan perulangan lagi sebanyak array words dimensi kedua
    for (var j = 0; j < words[i].length; j++) {
      // Lakukan penjumlahan index dimensi pertama dan index dimensi kedua
      var jumlah = i + j;
      // Jika hasil penjumlahan adalah angka prima maka remove vocal terlebih dahulu
      if (primeNumber(jumlah)) {
        words[i][j] = removeVocal(words[i][j]);
      }
      // Jika hasil penjumlahan adalah angka genap maka reverse kata tersebut
      if (jumlah % 2 === 0) {
        words[i][j] = reverseString(words[i][j]);
      } 
      // Jika hasil penjumlahan adalah angka ganjil maka ubah ke uppercase
      else {
        words[i][j] = upperCase(words[i][j]);
      }
    }
  }
  return words;
};

// Function untuk mengecek apakah angka prima atau tidak
function primeNumber(number) {
  var flag = true;
  if (number === 0 || number === 1) {
    flag = false;
  } else {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        flag = false;
      }
    }
  }
  return flag;
}

// Function untuk menghilangkan huruf vocal
function removeVocal(string) {
  var newString = "";
  var vocal = "aeiou";
  for (var i = 0; i < string.length; i++) {
    var flag = true;
    for (var j = 0; j < vocal.length; j++) {
      if (string[i] === vocal[j]) {
        flag = false;
      }
    }
    if (flag) {
      newString = newString + string[i];
    }
  }
  return newString;
}

// Function untuk membalikkan kata
function reverseString(string) {
  var newString = "";
  for (var i = string.length-1; i >= 0; i--) {
    newString = newString + string[i];
  }
  return newString;
}

// Function untuk mengubah menjadi UpperCase
function upperCase(string) {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < lower.length; j++) {
      if (string[i] === lower[j]) {
        newString = newString + upper[j];
      }
    }
  }
  return newString;
}

var words = [
  ["cat", "dog", "fish"],
  ["cat", "dog", "fish"], 
  ["cat", "dog", "fish"]
]
console.log(changeWords(words))
/*
[ 
  [ 'tac', 'DOG', 'hsf' ],
  [ 'CAT', 'gd', 'FSH' ],
  [ 'tc', 'DG', 'hsif' ] 
]

*/