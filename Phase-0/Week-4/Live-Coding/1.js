/*
  ////////////
  sumTheNumber
  ////////////

  Function sumTheNumber akan menentukkan jumlah dari angka-angka dalam suatu string.
  Function akan menerima 1 parameter yaitu:
    - stringAngka adalah string yang berisi kumpulan data, tipe datanya string.
    - apabila stringAngka tersebut pada index yang ganjil maka akan ditambahkan
      jumlah kelipatan 2, selain itu cukup jumlahkan langsung.
  Function ini akan mengembalikkan nilai number.
  
  --------
  EXAMPLE:
  --------
  [INPUT]
    var stringNumber = '123456'

  [PROCESS]
  string  : 1   2   3   4   5   6
  index   : 0   1   2   3   4   5
  result  : 1 (2*2) 3 (2*4) 5 (2*6) => 1 + 4 + 3 + 8 + 5 + 12

  [OUTPUT]
    33

  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift(), dan di RULES lain.
    2. Diperbolehkan untuk menggunakan built in untuk mengubah tipe data String ke Number, ataupun sebaliknya.
    2. Diasumsikan string selalu ada nilainya dan nilainya positif.
    3. WAJIB menggunakan PSEUDOCODE atau nilai 0.
*/

// PSEUDOCODE
/*
CREATE total SET 0
CREATE length SET the length of stringNumber
IF length GREATER THAN 0
  DO 
    CREATE counter SET 0
    FOR counter LESS THAN length
      CHANGE stringNumber with index EQUALS TO counter into number variable
      CREATE angka SET number value of stringNumber with index EQUALS TO counter
      IF counter MODULUS by 2 IS NOT 0 THEN
        CALCULATE angka TIMES by 2
      END IF
      CALCULATE total ADD by angka
      INCREMENT counter
    END FOR
END IF
DISPLAY total
*/

function sumTheNumber(stringNumber) {
  // Deklarasi variabel total untuk menyimpan hasil penjumlahan akhir
  var total = 0;
  // Cari panjang length dari string
  var length = stringNumber.length;
  // Jika ditemukan lebih dari 1 karakter
  if (length > 0) {
    // Lakukan perulangan untuk menjumlahkan semua angka string
    for (var i = 0; i < length; i++) {
      // Ubah char string menjadi bentuk number agar dapat dijumlah
      var angka = parseInt(stringNumber[i]);
      // Jika angka sekarang ganjil maka dikalikan 2 terlebih dahulu
      if ( i % 2 !== 0 ) {
        angka = angka * 2;
      }
      // Lakukan penjumlahan total
      total = total + angka;
    }
  }
  return total;
}

console.log(sumTheNumber('123456')) // 33
console.log(sumTheNumber('341231')) // 21
console.log(sumTheNumber('1')) // 1
console.log(sumTheNumber('01')) // 2