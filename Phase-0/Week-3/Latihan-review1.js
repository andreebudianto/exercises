/*
  Array:
    1. Mengakses data dalam array
    2. Membuat kondisional dalam array dan looping
    3. Metode flag
  Multidimensional Array:
    1. Mengakses dala dalam multidimensional array
    2. Membuat kondisional dalam array, looping, dan nested looping
    3. Object reference
*/

// Contoh 1
// Mengakses data dalam array (coba)
function example1(artists) {
  return artists[artists.length - 1];
}

console.log('Contoh 1:', example1(['Ari', 'Lasso', 'Titi', 'DJ']));
// 'DJ'

// Contoh 2
// Membuat kondisional dalam array dan looping
// Mencari string mana dalam suatu array yang paling panjang stringnya
function example2(artists) {
  var longest = "";
  for (var i = 0; i < artists.length; i++) {
    if (artists[i].length > longest.length) {
      longest = artists[i];
    }
  }
  return longest;
}

console.log('Contoh 2:', example2(['Ari', 'Lasso', 'Titi', 'DJ']));
// 'Lasso'

// Contoh 3
// Membuat metode flagging
// Menghapus nama yang memiliki huruf a, gunakan splice

function example3(artists) {
  var i = 0;
  while (i < artists.length) {
    var flag = false;
    for (var j = 0; j < artists[i].length; j++) {
      if (artists[i][j].toLowerCase() === "a") {
        flag = true;
      }
    }
    if (flag) {
      artists.splice(i,1);
    } else {
      i++;
    }
  }
  return artists;
}

console.log('Contoh 3:', example3(['Aria', 'Lasso', 'Titi', 'DJ']));
// ['Titi', 'DJ']

// ================= Push Method ==================
// function example3(artists) {
//   var result = [];
//   for (var i = 0; i < artists.length; i++) {
//     var containsA = false;
//     for (var j = 0; j < artists[i].length; j++) {
//       if (artists[i][j].toLowerCase() === 'a') {
//         containsA = true;
//         break;
//       }
//     }
//     if (containsA === false) {
//       result.push(artists[i]);
//     }
//   }
//   return result;
// }


// Contoh 4
// Mengakses data dalam multidimensi array
function example4(artists) {
  var result = [];
  for (var i = 0; i < artists.length; i++) {
    result.push( artists [ i ] [ artists[i].length-1 ] );
  }
  return result;
}

console.log('Contoh 4:', example4([['Ari', 'Lasso'], ['Titi', 'DJ']]));
// ['Lasso', 'DJ']

// Contoh 5
// Object reference
// Membuat segitiga multidimensi array

function example5(artists) {
  var artistsTemp = [];
  var result = [];
  for (var i = 0; i < artists.length; i++) {
    artistsTemp.push(artists[i]);
    result.push(artistsTemp.slice());
  }
  return result;
}

console.log('Contoh 5:', example5(['Ari', 'Lasso', 'Titi', 'DJ']));
// [
//   ['Ari'],
//   ['Ari', 'Lasso'],
//   ['Ari', 'Lasso', 'Titi'],
//   ['Ari', 'Lasso', 'Titi', 'DJ'],
// ]

// ================= Second Method ======================
// function example5(artists) {
//   var result = [];
//   for (var i = 0; i < artists.length; i++) {
//     var artistsTemp = [];
//     for (var j = 0; j < i + 1; j++) {
//       artistsTemp.push(artists[j]);
//     }
//     result.push(artistsTemp);
//   }
//   return result;
// }