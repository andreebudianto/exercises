/*
  //////////////////////
  pyramidNumberExtension
  //////////////////////

  Function pyramidNumberExtension adalah suatu fungsi kelanjutan dari pyramidNumber yang sudah dibuat.
  Function ini akan menerima parameter max yang bertipe data number, serta hanya berfungsi untuk menampilkan
  saja.
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var max = 5

  [OUTPUT]
    55555
    4444
    333
    22
    1
    22
    333
    4444
    55555

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var max = 1
  [OUTPUT]
    1

  [RULES]
    1. Dilarang menggunakan built in function apapun.
    2. Asumsi nilai minimum max adalah 1.
    3. Nilai rocket hanya ada 0 atau 100, jadi diutamakan mengerjakkan soal yang lain terlebih dahulu.
*/

function pyramidNumberExtension(max) {
  // code here
  var char = "";
  for (var i = max; i > 0; i--) {
    char = "";
    for (var j = 0; j < i; j++) {
      char = char + i;
    }
    console.log(char);
  }
  for (var k = 2; k <= max; k++) {
    newchar = "";
    for (var l = 0; l < k; l++) {
      newchar = newchar + k;
    }
    console.log(newchar);
  }
}

// TEST CASES
pyramidNumberExtension(5)
/*
  55555
  4444
  333
  22
  1
  22
  333
  4444
  55555
*/
pyramidNumberExtension(1);
/*
  1
*/

