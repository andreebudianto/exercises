// 1. memfilter nilai object berdasarkan kondisi tertentu

var exercise1 = [
  { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
  { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
]

// Release 1 => coba ambil nama-nama yang nilainya diatas 30
/* 
  [ 
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
  ]
*/
var arrayScore = [];
for (var i = 0; i < exercise1.length; i++) {
  if (exercise1[i].score !== undefined) {
    if (exercise1[i].score > 30) {
      arrayScore.push(exercise1[i]);
    }
  }
}
console.log(arrayScore);

// Release 2 => coba ambil nama-nama yang nilainya diantara 70 dan 90
/* 
  [ 
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
  ]
*/  
var arrayScope = [];
for (var i = 0; i < exercise1.length; i++) {
  if (exercise1[i].score !== undefined) {
    if (exercise1[i].score >= 70 && exercise1[i].score <=90) {
      arrayScope.push(exercise1[i]);
    }
  }
}
console.log(arrayScope);

// 2. mensorting array of object berdasarkan value dari objectnya

// Release 1 => sorting isi ascending
/* 
  [ 
    { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100}
  ]
*/
var ascArray = exercise1.slice();
var flag = true;
while (flag) {
  flag = false;
    for (var i = 0; i < ascArray.length-1; i++) {
      var temp = "";
      if (ascArray[i].score !== undefined) {
        if (ascArray[i].score > ascArray[i+1].score) {
          temp = ascArray[i];
          ascArray[i] = ascArray[i+1];
          ascArray[i+1] = temp;
          flag = true;
        }
      }
  }
}
console.log(ascArray);

// Release 2 => sorting isi descending
/* 
  [ 
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
    { name: 'ginta', position: 'BF', ability: 'fat', score: 20 }
  ]
*/
var descArray = exercise1.slice();
var flag = true;
while (flag) {
  flag = false;
    for (var i = 0; i < descArray.length-1; i++) {
      var temp = "";
      if (descArray[i].score !== undefined) {
        if (descArray[i].score < descArray[i+1].score) {
          temp = descArray[i];
          descArray[i] = descArray[i+1];
          descArray[i+1] = temp;
          flag = true;
        }
      }
  }
}
console.log(descArray);