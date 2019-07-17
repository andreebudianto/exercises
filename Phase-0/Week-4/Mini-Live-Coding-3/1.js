/*
=================
GUILD RAID FILTER
=================

guildRaidFilter adalah sebuah function yang menerima 2 parameter members dan req
  - members merupakan sebuah array of object yang berisi anggota guild
  - req adalah sebuah object dengan requirement power minimal dan job yang dibutuhkan

Output dari function ini adalah sebuah array of object yang berisi dengan members yang
bisa diajak raid dengan ketentuan memiliki power diatas requirement dan juga job yang sesuai dengan permintaan
 */


function guildRaidFilter (members, req) {
  // Pertama buat array result untuk menampung hasil
  var result = [];
  // Lakukan perulangan sebanyak member guild untuk mengecek setiap member masuk kriteria atau tidak
  for (var i = 0; i < members.length; i++) {
    // Lanjutkan proses jika ada ditemukan property power
    if (members[i].power !== undefined) {
      // Jika power member guild lebih besar sama dengan requirement power yang dibutuhkan maka lanjut proses
      if (members[i].power >= req.power) {
        // Lakukan proses perulangan untuk requirement job yang dibutuhkan
        for (var j = 0; j < req.jobs.length; j++) {
          // Lanjutkan proses jika ada ditemukan property job
          if (members[i].job !== undefined) {
            // Apabila job member memenuhi job requirement maka push ke array result
            if (members[i].job === req.jobs[j]) {
              result.push(members[i]);
            }
          }
        }
      }
    }
  }
  return result;
}
var guild = 
[
  {name: 'Kirito', job: 'Swordman', power: 10000},
  {name: 'Dazzle', job: 'Cleric', power: 8000},
  {name: 'Xin', job: 'Mage', power: 8000},
  {name: 'Sinon', job: 'Archer', power: 11000},
  {name: 'Asuna', job: 'Swordman', power: 5800},
  {name: 'Razzil', job: 'Merchant', power: 9000},
  {name: 'Darkbrew', job: 'Merchant', power: 9999},
  {name: 'Wizz', job: 'Blacksmith', power: 9000},
]
console.log(guildRaidFilter(guild, {power: 7000, jobs: ['Swordman', 'Mage']}))
  // [ { name: 'Kirito', job: 'Swordman', power: 10000 },
  // { name: 'Xin', job: 'Mage', power: 8000 } ]
console.log(guildRaidFilter(guild, {power: 5800, jobs: ['Swordman', 'Mage']}))
  // [ { name: 'Kirito', job: 'Swordman', power: 10000 },
  // { name: 'Xin', job: 'Mage', power: 8000 },
  // { name: 'Asuna', job: 'Swordman', power: 5800 } ]
console.log(guildRaidFilter(guild, {power: 7000, jobs: ['Swordman', 'Mage', 'Cleric', 'Merchant']}))
  //  [ { name: 'Kirito', job: 'Swordman', power: 10000 },
  //   { name: 'Dazzle', job: 'Cleric', power: 8000 },
  //   { name: 'Xin', job: 'Mage', power: 8000 },
  //   { name: 'Razzil', job: 'Merchant', power: 9000 },
  //   { name: 'Darkbrew', job: 'Merchant', power: 9999 } ]
console.log(guildRaidFilter(guild, {power: 7000, jobs: ['Cleric', 'Archer']}))
  // [ { name: 'Dazzle', job: 'Cleric', power: 8000 },
  // { name: 'Sinon', job: 'Archer', power: 11000 } ]
