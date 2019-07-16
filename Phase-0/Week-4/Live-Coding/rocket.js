/*
  ///////////////////
  richestGroupDynamic
  ///////////////////

  Function richestGroupDynamic akan menentukkan siapa yang paling kaya dalam suatu grup.
  Function akan menerima 1 parameter yaitu:
    - groups adalah array yang berisi kumpulan data vote, tipe datanya array.
  Function ini akan mengembalikkan nilai string.
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var groups = [
      ['A', 'B', 'C'],
      ['A', 'A', 'D', 'D', 'D']
    ]

  [PROCESS]
  Pada array ['A', 'B', 'C'] tidak ada yang unggul.
  Pada array ['A', 'A', 'D', 'D', 'D'] D unggul.

  [OUTPUT]
    [ 'D' ]

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var groups = [
      ['Z', 'Z'],
      ['B']
    ]

  [PROCESS]
  Pada array ['Z', 'Z'] Z unggul.
  Pada array ['B'] B unggul.

  [OUTPUT]
    [ 'Z', 'B' ]

  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift().
*/

function richestGroupDynamic(groups) {
  // Buat variabel result untuk menampung hasil akhir
  var result = [];
  // Lakukan proses sorting
  for (var i = 0; i < groups.length-1; i++) {
    var flag = true;
    while (flag) {
      flag = false;
      for (var j = 0; j < groups[i].length; j++) {
        if (groups[i][j] > groups[i][j+1]) {
          var temp = groups[i][j];
          groups[i][j] = groups[i][j+1];
          groups[i][j+1] = temp;
          flag = true;
        }
      }
    }
    // Buat variabel array richname untuk menampung nama yg ditemukan dan array richcount untuk jumlah nama yang ditemukan
    // Buat variabel richest untuk penanda kalau ada nama yg sama diskip
    var richname = [];
    var richcount = [];
    var richest = "";
    // Lakukan perulangan jika nama saat ini tidak sama dengan richest maka lakukan proses penjumlahan
    for (var k = 0; k < groups[i].length; k++) {
      if (groups[i][k] !== richest) {
        var counter = 0;
        // Hitung jumlah nama yang muncul dalam array
        for (var l = 0; l < groups[i].length; l++) {
          if (groups[i][k] === groups[i][l]) {
            counter++;
          }
        }
        // Masukkan nama dan jumlah nama ke dalam array masing-masing dan ganti nilai richest
        richname.push(groups[i][k]);
        richcount.push(counter);
        richest = groups[i][k];
      }
    }
    // Apabila sudah selesai maka cek apakah jumlah nama lebih dari 1, jika lebih dari 1 maka harus hitung jumlah terbesar
    if (richcount.length > 1) {
      var richestcount = 0;
      var totalcount = 0;
      var count = 0;
      // Cari nilai count terbesar dari array richcount dan mark untuk indeks dengan jumlah count terbesar
      for (var m = 0; m < richcount.length; m++) {
        if (richcount[m] > richestcount) {
          richestcount = richcount[m];
          count = m
        }
        totalcount = totalcount + richcount[m];
      }
      // Jika nilai count ada yang sama tidak sama maka push nama yang paling banyak muncul ke array result
      if ( totalcount / richcount.length !== richestcount) {
        result.push(richname[count]);
      }
    } 
    // Jika cuma ada satu nama maka push ke array result
    else if (richcount.length === 1) {
      result.push(richname[0]);
    }
  }
  return result;

  // ===================== Average Method Fail ===================
  // var result = [];
  // for (var i = 0; i < groups.length; i++) {
  //   var arraycounter = [];
  //   var richname = "";
  //   var richcounter = 0;
  //   var total = 0;
  //   for (var j = 0; j < groups[i].length-1; j++) {
  //     var counter = 0;
  //     for (var k = 0; k < groups[i].length; k++) {
  //       if (groups[i][j] === groups[i][k]) {
  //         counter++;
  //       }
  //     }
  //     if (counter > richcounter) {
  //       richname = groups[i][j];
  //       richcounter = counter;
  //     }
  //     arraycounter.push(counter);
  //   }
  //   for (var l = 0; l < arraycounter.length; l++) {
  //     total = total + parseInt(arraycounter[l]);
  //   }
  //   if ( total/arraycounter.length !== richcounter && arraycounter.length > 1) {
  //     result.push(richname);
  //   } else if (arraycounter.length === 1 || richcounter > 1) {
  //     result.push(richname);
  //   }
  // }
  // return result;
}

console.log(richestGroupDynamic([
  ['A', 'B', 'C'],
  ['A', 'A', 'D', 'D', 'D']
]))
// [ 'D' ]

console.log(richestGroupDynamic([
  ['A', 'A'],
  ['B']
]))
// [ 'A', 'B' ]

console.log(richestGroupDynamic([
  ['Z', 'Z'],
  ['B', 'X']
]))
// [ 'Z' ]

console.log(richestGroupDynamic([]))
// []