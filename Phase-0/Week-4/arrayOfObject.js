/*
  Opening
  Array dan Object adalah tipe data structured
  jadi array bisa menampung object, begitupun sebaliknya
*/

// bentuk normal
var example1 = ['a', 'b'];
var example2 = { name: 'a' };
// tapi kita bisa juga memasukkan object ke dalam array
var example3 = { name: example1 };
var example4 = [{ name: 'c' }, { name: 'a' }];
example4.push(example2);
// silahkan console.log untuk melihat nilai example 3 dan 4

// kenapa dibutuhkan pelajaran array of object. gunanya untuk bisa menggunakan
// kegiatan yang bisa array lakukan seperti sort dan filter. sementara data
// umumnya lebih baik dibentuk dalam bentuk object untuk kondisi tertentu
// seperti nama orang { name: 'adi', age: 10, height: 150 }

/*
  Poin penting yang perlu dipahami:
  1. mengakses nilai di dalam array of object
  2. melooping dan kondisional array dari array of object
  3. melooping dan kodisional object dari array of object
  Latihan:
  1. memfilter nilai object berdasarkan kondisi tertentu
  2. mensorting array of object berdasarkan value dari objectnya
*/

// ------------------
// 1. mengakses nilai
// ------------------
// 1.1 easy
var exercise1 = [
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed' },
  { name: 'ginta', position: 'BF', ability: 'fat' }
]

// release 1 => coba akses object yang berisi ginta 
// { name: 'ginta', position: 'BF', ability: 'fat' }
for (var i = 0; i < exercise1.length; i++) {
  if (exercise1[i].name !== undefined) {
    if (exercise1[i].name === "ginta") {
      console.log(exercise1[i]);
    }
  }
}

// release 2 => coba dapatkan string ginta
// 'ginta'
for (var i = 0; i < exercise1.length; i++) {
  if (exercise1[i].name !== undefined) {
    if (exercise1[i].name === "ginta") {
      console.log(exercise1[i].name);
    }
  }
}

// release 3 => dapatkan key dari isi object
// ['name', 'position', 'ability']
for (var i = 0; i < exercise1.length; i++) {
  if (exercise1[i].name !== undefined) {
    if (exercise1[i].name === "eyeshield") {
      console.log(Object.keys(exercise1[i]));
    }
  }
}

// release 4 => dapatkan value dari isi object eyeshield
// ['eyeshield', 'RB', 'topSpeed']
for (var i = 0; i < exercise1.length; i++) {
  if (exercise1[i].name !== undefined) {
    if (exercise1[i].name === "eyeshield") {
      console.log(Object.values(exercise1[i]));
    }
  }
}

// release 5 => coba ambil variable eyeshield apabila name sudah diambil dalam bentuk variable
// akses data apa menggunakan . atau [] ?
var propertyName = 'name';
for (var i = 0; i < exercise1.length; i++) {
  if (exercise1[i].name !== undefined) {
    if (exercise1[i].name === "eyeshield") {
      console.log(exercise1[i][propertyName]);
    }
  }
}


// 1.2 medium
var exercise2 = [
  { 
    name: 'eyeshield',
    position: 'RB',
    ability: [
      { weakness: [ 'shy' ] , power: [ 'speed', 'nice' ] } ] 
  },
  { name: 'ginta' }
]

// release 1 => coba akses ability eyeshield
// { weakness: [ 'shy' ] , power: [ 'speed', 'nice' ] }
for (var i = 0; i < exercise2.length; i++) {
  if (exercise2[i].name !== undefined) {
    if (exercise2[i].name === "eyeshield") {
      if (exercise2[i].ability !== undefined) {
        for (var j = 0; j < exercise2[i].ability.length; j++) {
          console.log(exercise2[i].ability[j]);
        }
      }
    }
  }
}

// release 2 => coba akses power eyeshield speed
// 'speed'
for (var i = 0; i < exercise2.length; i++) {
  if (exercise2[i].name !== undefined) {
    if (exercise2[i].name === "eyeshield") {
      if (exercise2[i].ability !== undefined) {
        for(var j = 0; j < exercise2[i].ability.length; j++) {
          if (exercise2[i].ability[j].power !== undefined) {
            for(var k = 0; k < exercise2[i].ability[j].power.length; k++) {
              if (exercise2[i].ability[j].power[k] === "speed") {
                console.log(exercise2[i].ability[j].power[k]);
              }
            }
          }
        }
      }
    }
  }
}

// ----------------------------------
// 2. melooping array dan kondisional
// ----------------------------------
var exercise1 = [
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed' },
  { name: 'ginta', position: 'BF', ability: 'fat' }
]

// release 1 => coba tampilkan
/*
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed' }
  { name: 'ginta', position: 'BF', ability: 'fat' }
*/
for (var i = 0; i < exercise1.length; i++) {
  console.log(exercise1[i]);
}

// release 2 => coba tampilkan yang ganjil atau genap saja
/*
  **GENAP**
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed' }
  **GANJIL**
  { name: 'ginta', position: 'BF', ability: 'fat' }
*/
for (var i = 0; i < exercise1.length; i++) {
  if (i % 2 === 0) {
    console.log("**GENAP**");
    console.log(exercise1[i]);
  } else {
    console.log("**GANJIL**");
    console.log(exercise1[i]);
  }
}

// -------------------------------------------------------
// 3. melooping dan kodisional object dari array of object
// -------------------------------------------------------
// release 1 => coba tampilkan nama
/*
  **OUTPUT**
  eyeshield
  ginta
*/
console.log("**OUTPUT**");
for (var i = 0; i < exercise1.length; i++) {
  if (exercise1[i].name !== undefined) {
    console.log(exercise1[i].name);
  }
}

// release 2 => coba tampilkan bentukan string seperti ini
/*
  nama eyeshield dia adalah seorang RB dengan kelebihan topSpeed
  nama ginta dia adalah seorang BF dengan kelebihan fat
*/
for (var i = 0; i < exercise1.length; i++) {
  if (exercise1[i].name !== undefined) {
    if (exercise1[i].position !== undefined) {
      if (exercise1[i].ability !== undefined) {
        console.log("nama", exercise1[i].name, "dia adalah seorang", exercise1[i].position, "dengan kelebihan", exercise1[i].ability);
      }
    }
  }
}

// release 3 => dapatkan array dari name saja
// ['eyeshield', 'ginta']
var arrayName = [];
for (var i = 0; i < exercise1.length; i++) {
  if (exercise1[i].name !== undefined) {
    arrayName.push(exercise1[i].name);
  }
}
console.log(arrayName);

// release 4 => coba dapatkan semua pemain dengan posisi RB
// [{ name: 'eyeshield', position: 'RB', ability: 'topSpeed' }]
var arrayPosition = [];
for (var i = 0; i < exercise1.length; i++) {
  if (exercise1[i].name !== undefined) {
    if (exercise1[i].position !== undefined) {
      if (exercise1[i].position === "RB") {
        arrayPosition.push(exercise1[i]);
      }
    }
  }
}
console.log(arrayPosition);