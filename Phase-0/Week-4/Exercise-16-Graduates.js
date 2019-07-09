/* Phase 0 Week 4 Exercise 16 */
/* Graduates */

function graduates (students) {
    // Deklarasi variabel object untuk menampung hasil akhir
    var resultObj = {};
    // Set nama class untuk key dalam object
    var classes = "";
    // Lakukan perulangan sebanyak jumlah data pada array students
    var length = students.length;
    for (var i = 0; i < length; i++) {
        classes = students[i].class;
        // Pertama-tama harus cek apakah nilai nya diatas 75
        if (students[i].score > 75) {
            // Jika data awal maka set nama dan score tertinggi dengan data saat ini
            if (resultObj[classes] === undefined) {
                resultObj[classes] = [{
                    name: students[i].name,
                    score: students[i].score
                }];
            } else {
                resultObj[classes].push({
                    name: students[i].name,
                    score: students[i].score
                });
            }
        } 
        // Jika tidak ditemukan maka cukup print key class nya dengan nilai array kosong
        else {
            if (resultObj[classes] === undefined) {
                resultObj[classes] = [{}];
            }
        }
    }
    return resultObj;
}

console.log(graduates([
{
name: 'Dimitri',
score: 90,
class: 'foxes'
},
{
name: 'Alexei',
score: 85,
class: 'wolves'
},
{
name: 'Sergei',
score: 74,
class: 'foxes'
},
{
name: 'Anastasia',
score: 78,
class: 'wolves'
}
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
{
name: 'Alexander',
score: 100,
class: 'foxes'
},
{
name: 'Alisa',
score: 76,
class: 'wolves'
},
{
name: 'Vladimir',
score: 92,
class: 'foxes'
},
{
name: 'Albert',
score: 71,
class: 'wolves'
},
{
name: 'Viktor',
score: 80,
class: 'tigers'
}
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}