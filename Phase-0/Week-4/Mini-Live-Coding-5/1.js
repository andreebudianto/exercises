/*
  /////////////////////
  FUNCTION MEDIAN GENAP
  /////////////////////

  Fungsi Median Genap adalah mencari nilai median yang berupa genap di array.

  [PROCESS]

  INPUT:
  [1, 3, 4, 5, 6, 7]
  PROCESS:
  genap = [4, 6]
  median = 5
  OUTPUT:
  5

  [RULES]

  - Dilarang menggunakan built in function selain .push()
*/

function medianGenap(arr) {
  // Pertama buat array genap untuk menampung semua bilangan genap
  var genap = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      genap.push(arr[i]);
    }
  }
  // Cek panjang array genap
  var length = genap.length;
  // Cari nilai tengah array genap
  var mid = Math.floor(length/2);
  // Jika ada array maka lanjut proses
  if (length > 0) {
    // Jika panjang array genap maka cari nilai rata-rata
    if (length % 2 === 0) {
      var average = (genap[mid] + genap[(mid-1)]) / 2;
      return average;
    } 
    // Jika ganjil maka langsung tampilkan array dengan index mid
    else {
      return genap[mid]; 
    }
  } 
  // Jika tidak ada angka genap maka munculkan pesan error
  else{
    return "Tidak ada median";
  }
  
};

// TEST CASES
console.log(medianGenap([1, 2, 3, 4, 5])); // 3
console.log(medianGenap([1, 3, 4, 10, 12, 13])); // 10
console.log(medianGenap([3, 4, 7, 6, 10])); // 6
console.log(medianGenap([1, 3, 3])); // Tidak ada median
console.log(medianGenap([7, 7, 8, 8])); // 8