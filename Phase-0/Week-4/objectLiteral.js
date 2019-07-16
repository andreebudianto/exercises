/*
  Poin-poin yang wajib dikuasai adalah:
  1. cara mendeklarasikan object, cara membuat properties serta valuenya
  2. cara mengakses data di object
  3. cara melooping object
  4. mengubah dari array ke object
  5. Object.keys dan Object.values
  Latihan:
  1. cara membuat object literal
  2. cara memasukkan kumpulan array menjadi object
  3. cara membuat array menjadi unik
*/

// 1. membuat object literal (3 times)

function createObjectLiteral(name, batch, hobbies) {
  var studentObj = {
    name: name,
    batch: batch,
    hobbies: hobbies
  };
  return studentObj;
}

console.log(createObjectLiteral('Edison', 34, ['Baca Buku','Main Games']))
/*
  {
    name: '....',
    batch: '.....',
    hobbies: []
  }
*/

// 2. mengakses object literal (3 times)

var objectLiteral = {
  name: 'Edison',
  batch: 34,
  hobbies: ['Baca Buku', 'Main Games']
}

function printObjectValue(person) {
  var string = "Nama saya adalah " + person.name + "\n" + "Saya berada di batch " + person.batch + "\n" + "Hobby saya adalah " + person.hobbies.join(" dan ") ;
  return string;
}

console.log(printObjectValue(objectLiteral));

/*
  // Nama saya adalah .....
  // Saya berada di batch ....
  // Hobby saya adalah ....
*/

// 3. melooping object (7 times)
// object berbeda dengan array, karena object tidak punya index
// jadi urutan di object harusnya ngga dipermasalahkan, sehingga
// apabila ingin melakukan operasi yang harus berurutan lebih baik
// menggunakan array.

// notes: apabila properties dari object merupakan number, dia akan secara
// otomatis akan berurutan. sehingga bisa dimanfaatkan untuk kebutuhan tertentu

var hogwarts = {
  gryffindor: 30,
  hufflepuff: 29,
  ravenclaw: 29,
  slytherin: 28
}

function printKeyValue(hogwarts) {
  var string = "";
  var key = Object.keys(hogwarts);
  for (var i = 0; i < key.length; i++) {
    string = string + key[i] + ": " + hogwarts[key[i]] + "\n";
  }
  return string;
}

console.log(printKeyValue(hogwarts));

// 4. mengubah dari array ke object (5 times)

function changeArrayToObject(array) {
  var resultObj = {};
  for (var i = 0; i < array.length; i++) {
    if ( (resultObj[array[i][0]] === undefined) || (array[i][1] > resultObj[array[i][0]]) ) {
      resultObj[array[i][0]] = array[i][1];
    }
  }
  return resultObj;
}

// 4.1 ini satu semua
console.log(changeArrayToObject([
  ['gryffindor', 30],
  ['hufflepuff', 29],
  ['ravenclaw', 29],
  ['slytherin', 28]
]));

// notes: di object keynya pasti unik, jadi ngga ada yang bisa double.

// 4.2 bagaimana kalau ada beberapa, dan hanya diambil yang paling besar

console.log(changeArrayToObject([
  ['gryffindor', 30],
  ['gryffindor', 32],
  ['gryffindor', 29],
  ['slytherin', 28]
]));

// 5. bonus Object.keys dan Object.values 
// ubah hogwarts ke dalam bentuk array properties/keysnya dan array bentuk valuesnya

function objectToArray (obj) {
  var array = [];
  var keys = Object.keys(obj);
  var values = Object.values(obj);
  for (var i = 0; i < keys.length; i++) {
    var arrayTemp = [];
    arrayTemp.push(keys[i]);
    arrayTemp.push(values[i]);
    array.push(arrayTemp.slice());
  }
  return array;
}

console.log(objectToArray(hogwarts));