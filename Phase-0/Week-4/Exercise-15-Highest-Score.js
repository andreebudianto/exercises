/* Phase 0 Week 4 Exercise 15 */
/* Highest Score */

function highestScore (students) {
    // Deklarasi variabel object untuk menampung hasil akhir
    var resultObj = {};
    // Set nama class untuk key dalam object
    var classes = "";
    // Lakukan perulangan sebanyak jumlah data pada array students
    var length = students.length;
    for (var i = 0; i < length; i++) {
        // Reset variabel value name dan score tertinggi
        var highestName = "";
        var highestScore = 0;
        classes = students[i].class;
        // Cari class saat ini pada array student untuk membandingkan score
        for (var j = 0; j < length; j++) {
            // Harus bandingkan class yang sama
            if (classes === students[j].class) {
                // Jika data awal maka set nama dan score tertinggi dengan data saat ini
                if (highestScore === 0) {
                    highestName = students[j].name;
                    highestScore = students[j].score;
                } 
                // Jika score saat ini lebih besar daripada score sebelumnya maka update nama dan score
                else if (students[j].score > highestScore) {
                    highestName = students[j].name;
                    highestScore = students[j].score;
                }
                // Apabila sudah tidak ada lagi maka tambahkan key dan value kedalam object
                resultObj[classes] = {
                    name: highestName,
                    score: highestScore
                };
            }
        }
    }
    return resultObj;
}


console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}