/*
================
Poin Calculator
================

[INSTRUCTIONS]
Kamu diminta menghitung poin dari sebuah mendali yang didapat dalam sebuah pertandingan.
poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
Adapun ketentuannya:
Gold (G) = 2
Silver (S) = 1
Bronze (B) = 0.5

[RULE]
- WAJIB MENYERTAKAN PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
poinCalculator("GSB")
output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
*/

/*
PSEUDOCODE
==========
CREATE total SET 0
CREATE counterG SET 0
CREATE counterS SET 0
CREATE counterB SET 0
CREATE counter SET 0
CREATE length SET the length of string
FOR counter LESS THAN length
  DO
    IF string with index counter EQUALS TO "G" THEN
      CALCULATE total ADD by 2
      STORE the calculation result into total
      INCREMENT counterG
    ELSE IF string with index counter EQUALS TO "S" THEN
      CALCULATE total ADD by 1
      STORE the calculation result into total
      INCREMENT counterS
    ELSE IF string with index counter EQUALS TO "B" THEN
      CALCULATE total ADD by 0.5
      STORE the calculation result into total
      INCREMENT counterB
    END IF
END FOR
DISPLAY to the screen jumlah Gold: "counterG", jumlah Silver: "counterS", jumlah Bronze: "counterB". Dan totalnya adalah: "total"
*/

function poinCalculator(string) {
    // Buat variabel total untuk menghitung total penjumlahan
    var total = 0;
    // Buat variabel untuk menampung jumlah medal gold, silver, bronze
    var counterG = 0;
    var counterS = 0;
    var counterB = 0;
    // Lakukan perulangan sepanjang string
    var length = string.length
    for (var i = 0; i < length; i++) {
      // Kalau ketemu G maka nambah counterG dan tambah nilai total + 2
      if (string[i] === "G") {
        counterG++;
        total = total + 2;
      } 
      // Kalau ketemu S maka nambah counterS dan tambah nilai total + 1
      else if (string[i] === "S") {
        counterS++;
        total = total + 1;
      }
      // Kalau ketemu B maka nambah counterB dan tambah nilai total + 0.5 
      else if (string[i] === "B") {
        counterB++;
        total = total + 0.5;
      }
    }
    // Jika sudah selesai tinggal tampilkan saja
    return "jumlah Gold: " + counterG + ", jumlah Silver: " + counterS + ", jumlah Bronze: " + counterB + ". Dan totalnya adalah: " + total;
  }
  
  console.log(poinCalculator("GSB"));
  // jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
  console.log(poinCalculator("GGG"));
  // jumlah Gold: 3, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 6
  console.log(poinCalculator("SSB"));
  // jumlah Gold: 0, jumlah Silver: 2, jumlah Bronze: 1. Dan totalnya adalah: 2.5
  console.log(poinCalculator("BBGSSGB"));
  // jumlah Gold: 2, jumlah Silver: 2, jumlah Bronze: 3. Dan totalnya adalah: 7.5
  console.log(poinCalculator(""));
  // jumlah Gold: 0, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 0
  
