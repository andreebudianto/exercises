/*
  /////////////////
  americanGotTalent
  /////////////////

  Function americanGotTalent akan menentukkan juara serta jumlah votingnya dari suatu array.
  Function akan menerima 1 parameter yaitu:
    - votes adalah kumpulan string nama, tipe datanya array.
  Function ini akan mengembalikkan nilai string dalam format:
    - Apabila terdapat juara: "Selamat juaranya adalah [nama], dengan total votes yang diterima [totalVotes]".
    - Apabila tidak terdapat juara: "Mohon maaf juara tidak bisa ditentukkan dalam minggu ini".
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho'];

  [PROCESS]
    terdapat 2 voting Lee Min Ho yang paling banyak.

  [OUTPUT]
    Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2.

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho'];

  [PROCESS]
    tidak terdapat yang terbanyak.

  [OUTPUT]
    Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
  
  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .pop(), .shift() dan .unshift()
*/

function americanGotTalent(votes) {
  // Pertama-tama array harus di sort terlebih dahulu untuk agar dapat diambil array yang winner dan jumlah count
  var flag = true;
  while (flag) {
    flag = false;
    for (var i = 0; i < votes.length-1; i++) {
      if (votes[i] > votes[i+1]) {
        var temp = votes[i];
        votes[i] = votes[i+1];
        votes[i+1] = temp;
        flag = true;
      }
    }
  }
  console.log(votes);
  // Buat variabel arrayName dan arrayCount untuk GROUP BY nama dan jumlah nama yang ada dalam array
  var arrayName = [];
  var arrayCount = [];
  // Buat variabel currentName untuk pembanding apabila ada karakter yang berbeda
  var currentName = "";
  for (var j = 0; j < votes.length; j++) {
    // Reset counter menjadi nol setiap pergantian karakter
    var counter = 0;
    // Jika karakter berbeda dari sebelumnya maka lakukan proses penambahan counter
    if (votes[j] !== currentName) {
      // Lakukan perulangan untuk mendapatkan jumlah karakter yang ada dalam array
      for (var k = 0; k < votes.length; k++) {
        if (votes[j] === votes[k]) {
          counter++;
        }
      }
      // Masukkan nama dan jumlah muncul nama tersebut dalam arrayName dan arrayCount dan set currentName menjadi karakter sekarang
      arrayName.push(votes[j]);
      arrayCount.push(counter);
      currentName = votes[j];
    }
  }
  // Apabila arrayName dan arrayCount udah dapat semua maka kita harus mencari nilai tertinggi
  var highest = 0;
  var indexHighest = 0;
  // Apabila nilai saat ini lebih tinggi maka set nilai highest dan index yang tertinggi
  for (var k = 0; k < arrayCount.length; k++) {
    if (arrayCount[k] > highest) {
      highest = arrayCount[k];
      indexHighest = k;
    }
  }
  // Apabila sudah mendapatkan index dan count tertinggi tahap selanjutnya cek apakah ada duplikasi nilai tertinggi
  var duplicate = 0;
  for (var l = 0; l < arrayCount.length; l++) {
    if (arrayCount[l] === highest) {
      duplicate++;
    }
  }
  // Jika nilai tertinggi ditemukan lebih dari satu maka tidak ada pemenang
  if (duplicate > 1) {
    return "Mohon maaf juara tidak bisa ditentukan dalam minggu ini";
  } else {
    return "Selamat juaranya adalah " + arrayName[indexHighest] + ", dengan total votes yang diterima " + arrayCount[indexHighest];
  }

  // =================== Average Method ==================
  // var flag = true;
  // while (flag) {
  //   flag = false;
  //   for (var i = 0; i < votes.length-1; i++) {
  //     if (votes[i] > votes[i+1]) {
  //       var temp = votes[i];
  //       votes[i] = votes[i+1];
  //       votes[i+1] = temp;
  //       flag = true;
  //     }
  //   }
  // }
  // var winnerName = "";
  // var winnerCounter = 0;
  // var arrayWinner = [];
  // var total = 0;
  // for (var j = 0; j < votes.length; j++) {
  //   var counter = 0;
  //   for (var k = 0; k < votes.length; k++) {
  //     if (votes[j] === votes[k]) {
  //       counter++;
  //     }
  //   }
  //   arrayWinner.push(counter);
  //   if (counter > winnerCounter) {
  //     winnerName = votes[j];
  //     winnerCounter = counter;
  //   }
  // }
  // for (var l = 0; l < arrayWinner.length; l++) {
  //   total = total + parseInt(arrayWinner[l]);
  // }
  // if ( total/arrayWinner.length === winnerCounter) {
  //   return "Mohon maaf juara tidak bisa ditentukan dalam minggu ini";
  // } else {
  //   return "Selamat juaranya adalah " + winnerName + ", dengan total votes yang diterima " + winnerCounter;
  // }
}

console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho']));
// Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho']));
// Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby']));
// Selamat juaranya adalah Arby, dengan total votes yang diterima 2
