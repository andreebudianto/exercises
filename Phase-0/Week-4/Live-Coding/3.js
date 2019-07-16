/*
  ////////////
  richestGroup
  ////////////

  Function richestGroup akan menentukkan siapa yang paling kaya dalam suatu grup.
  Function akan menerima 1 parameter yaitu:
    - groups adalah array yang berisi kumpulan data vote, tipe datanya array.
    - kelompok yang ada HANYA terdiri dari A dan B. tapi tidak harus selalu ada.
  Function ini akan mengembalikkan nilai string.
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var groups = [
      ['A', 'B'],
      ['A', 'A']
    ]

  [PROCESS]
  Pada array ['A', 'B'] tidak ada yang unggul.
  Pada array ['A', 'A'] A unggul, maka nilai group A ditambah 1

  [OUTPUT]
    Group A win...

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var groups = [
      ['A', 'A'],
      ['B']
    ]

  [PROCESS]
  Pada array ['A', 'A'] A unggul, maka nilai group A ditambah 1.
  Pada array ['B'] B unggul, maka nilai group B ditambah 1.
  
  [NOTES]
  Apabila ada yang seri atau tidak ada yang unggul maka tampilkan Tidak ada pemenangnya...

  [OUTPUT]
    Tidak ada pemenangnya...

  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift().
*/


function richestGroup(groups) {
  // Pertama sort terlebih dahulu array groups awal
  var flag = true;
  while (flag) {
    flag = false;
    for (var i = 0; i < groups.length-1; i++) {
      if (groups[i] > groups[i+1]) {
        var temp = groups[i];
        groups[i] = groups[i+1];
        groups[i+1] = temp;
        flag = true;
      }
    }
  }
  // Buat variabel array untuk menampung hasil pemenang masing-masing data array
  var winnerFinal = [];
  for (var i = 0; i < groups.length; i++) {
    // Buat variabel array untuk menampung hasil pencarian semua groups yang ada dan jumlah masing-masing group yang muncul
    var winnerTemp = [];
    var countTemp = [];
    var winner = "";
    for (var j = 0; j < groups[i].length; j++) {
      var counter = 0;
      if (groups[i][j] !== winner) {
        for (var k = 0; k < groups[i].length; k++) {
          if (groups[i][j] === groups[i][k]) {
            counter++;
          }
        }
        winnerTemp.push(groups[i][j]);
        countTemp.push(counter);
        winner = groups[i][j];
      } 
    }
    // Apabila udah dapat array sementara maka cari angka kemunculan group yang paling besar
    var highest = 0;
    var indexHighest = 0;
    for (var l = 0; l < countTemp.length; l++) {
      if (countTemp[l] > highest) {
        highest = countTemp[l];
        indexHighest = l;
      }
    }
    // Cek apakah angka tersebut ada lebih dari 1
    var duplicate = 0;
    for (var m = 0; m < countTemp.length; m++) {
      if (countTemp[m] === highest) {
        duplicate++;
      }
    }
    // Jika tidak ada duplikasi berarti ada pemenang dan push untuk ke array winnerFinal agar bisa diproses lagi
    if (duplicate === 1) {
      winnerFinal.push(winnerTemp[indexHighest]);
    }
  }

  // Apabila sudah dapat array hasil pemenang dari data array maka sort hasil pemenangnya
  var swap = true;
  while (swap) {
    swap = false;
    for (var n = 0; n < winnerFinal.length-1; n++) {
      if (winnerFinal[i] > winnerFinal[i+1]) {
        var temp = winnerFinal[i];
        winnerFinal[i] = winnerFinal[i+1];
        winnerFinal[i+1] = temp;
        swap = true;
      }
    }
  }
  // buat variabel array untuk menampung data array yang telah dikelompokkan (GROUP BY)
  var winnerName = [];
  var winnerCount = [];
  var initial = "";
  for (var o = 0; o < winnerFinal.length; o++) {
    var counter = 0;
    if (winnerFinal[o] !== initial) {
      for (var p = 0; p < winnerFinal.length; p++) {
        if (winnerFinal[o] === winnerFinal[p]) {
          counter++;
        }
      }
      winnerName.push(winnerFinal[o]);
      winnerCount.push(counter);
      initial = winnerFinal[o];
    } 
  }
  // Apabila sudah dapat array hasil pengelompokkan cari data group yang paling sering muncul
  var highestFinal = 0;
  var indexHighestFinal = 0;
  for (var q = 0; q < winnerCount.length; q++) {
    if (winnerCount[q] > highestFinal) {
      highestFinal = winnerCount[q];
      indexHighestFinal = q;
    }
  }
  // Cek duplikasi hasil nilai tertinggi
  var duplicateFinal = 0;
  for (var r = 0; r < winnerCount.length; r++) {
    if (winnerCount[r] === highestFinal) {
      duplicateFinal++;
    }
  }
  // Jika tidak ada duplikasi berarti group tersebut yang menang
  if (duplicateFinal === 1) {
    return "Group " + winnerFinal[indexHighestFinal] + " win...";
  } else {
    return "Tidak ada pemenangnya...";
  }


  // ================= Static Mode =================
  // var winnerA = 0;
  // var winnerB = 0;
  // for (var i = 0; i < groups.length; i++) {
  //   for (var j = 0 ; j < groups[i].length; j++) {
  //     var counterA = 0;
  //     var counterB = 0;
  //     for (var k = 0; k < groups[i].length; k++) {
  //       if (groups[i][k] === "A") {
  //         counterA ++;
  //       } else if (groups[i][k] === "B") {
  //         counterB ++;
  //       } 
  //     }
  //   }
  //   if (counterA > counterB) {
  //     winnerA++;
  //   } else if (counterB > counterA) {
  //     winnerB++;
  //   }
  // }
  // if (winnerA > winnerB) {
  //   return "Group A win...";
  // } else if (winnerB > winnerA) {
  //   return "Group B win...";
  // } else {
  //   return "Tidak ada pemenangnya...";
  // }
}

console.log(richestGroup([
  ['A', 'B'],
  ['A', 'A']
]))
// Group A win...

console.log(richestGroup([
  ['A', 'A'],
  ['B']
]))
// Tidak ada pemenangnya...

console.log(richestGroup([
  ['B']
]))
// Group B win...

console.log(richestGroup([]))
// Tidak ada pemenangnya...