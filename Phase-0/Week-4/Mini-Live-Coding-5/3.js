/*
  //////////////////////
  FUNCTION MULTIPLE BY 3
  //////////////////////

  Fungsi Multiple By 3 akan mengalikan angka-angka dengan angka di 3 setelahnya,
  kemudian akan menjumlahkan angka tersebut ketika ganjil

  [PROCESS]

  INPUT:
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  PROCESS:
  1 * 5 = 5 (ganjil)
  2 * 6 = 12 (genap)
  3 * 7 = 21 (ganjil)
  4 * 8 = 32 (genap)
  5 * 9 = 45 (ganjil)

  5 + 21 + 45 = 71
  OUTPUT:
  71

  [RULES]

  - Dilarang menggunakan built in function apapun
*/

function multipleBy3 (array) {
  // Buat variabel newArray untuk menampung hasil perkalian index saat ini dengan 3 index setelahnya
  var newArray = [];
  var length = array.length;
  // Lakukan perulangan sepanjang array yang di kurangi 4 karena kita mau melakukan perkalian dengan 3 index setelahnya
  for (var i = 0; i < length-4; i++) {
    // Lakukan perkalian dan push hasil perkalian ke newArray
    var multiply = array[i] * array[i+4];
    newArray.push(multiply);
  }
  // Buat variabel total untuk menampung penjumlahan hasil perkalian pada index newArray yang ganjil
  var total=0;
  for (var j = 0; j < newArray.length; j++) {
    // Jika index pada newArray ganjil maka tambahkan dengan total
    if ( (j+1) % 2 !== 0 ) {
      total = total + newArray[j];
    }
  }
  return total;
};

console.log(multipleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 71