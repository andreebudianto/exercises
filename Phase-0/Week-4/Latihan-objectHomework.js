// 1. Buat object seperti ini
/*
  {
    name: YOUR_NAME,
    batch: YOUR_BATCH,
    hobbies: [YOUR_HOBBIES]
  }
*/
function createObject (person) {
  var personObj = {
    name: person[0],
    batch: person[1],
    hobbies: person[2]
  };
  return personObj;
}

console.log(createObject(["Edison", "Batch-34-Humble-Fox", ["Reading", "Playing"] ]));

// 2. Memasukkan array ke dalam object
// Urutannya [NAME, CLUB, AGE]
var insertToObjects = [
  ['Kapten Tsubasa', 'Nankatsu', 19],
  ['Wakabayashi', 'Nankatsu', 20],
  ['Saitama', 'Hero Associate', 18]
]

function arraytoObject (array) {
  var objectResult = {};
  for (var i = 0; i < array.length; i++) {
    objectResult["PLAYER"+ (i+1)] = {
      NAME: array[i][0],
      CLUB: array[i][1],
      AGE: array[i][2]
    };
  }
  return objectResult;
}

console.log(arraytoObject(insertToObjects));

// 3. Membuat array menjadi unik

function makeUnique(arrayOfNames) {
  var arrayGrouped = [];
  arrayGrouped.push(arrayOfNames[0]);
  var i = 0;
  while (i < arrayOfNames.length) {
    var flag = true;
    for (var j = 0; j < arrayGrouped.length; j++) {
      if (arrayOfNames[i] === arrayGrouped[j]) {
        flag = false;
      }
    }
    if (flag) {
      arrayGrouped.push(arrayOfNames[i]);
    }
    i++;
  }
  return arrayGrouped;
}

console.log(makeUnique(
  ['Lee Min Ho', 'Lee Kwang Ho', 'Lee Min Ho', 'Lindan']
))

// ['Lee Min Ho', 'Lee Kwang Ho', 'Lindan']