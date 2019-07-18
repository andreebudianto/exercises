/*
  ================
  Maze Runner
  ================

  [INSTRUCTIONS]
  Maze Runner adalah suatu function yang dibuat untuk mengetahui, siapa yang
  akan memenangkan perlombaan maze runner.

  [EXAMPLE]
  var persons = ['Andi', 'Betty', 'Ryan', 'Danang'];
  var tracks = ['AABBAABB', 'ABAB', 'BBBBBBAA', 'AAAB'];
  pemenangnya apabila jumlah A dan B atau sebaliknya berupa perbandingan 1 : 3
  Ryan => 2 A dan 6 B => 1 : 3
  Danang => 3 A dan 1 B => 3 : 1
  output yang diharapkan adalah ['Ryan', 'Danang'];

  [RULE]
  - Tidak boleh menggunakan built in function selain .push() dan .unshift()
*/

function mazeRunner(people, solves) {
  var winners = [];
  for (var i = 0; i < solves.length; i++) {
    var checked = checkAB(solves[i]);
    if (checked) {
      winners.push(people[i]);
    }
  }
  if (winners.length === 0) {
    return "Tidak ada pemenangnya";
  } else {
    return winners;
  }
};

function checkAB (string) {
  var countA = 0;
  var countB = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "A") {
      countA++;
    } else if (string[i] === "B") {
      countB++;
    }
  }
  if ( (countA / countB === 3) || (countB / countA) === 3 ) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
var persons = ['Andi', 'Betty', 'Ryan', 'Danang'];
var tracks = ['AABBAABB', 'ABAB', 'BBBBBBAA', 'AAAB'];
console.log(mazeRunner(persons, tracks));
// [ 'Ryan', 'Danang' ]
var persons2 = ['Andi', 'Betty'];
var tracks2 = ['AAB', ''];
console.log(mazeRunner(persons2, tracks2));
// Tidak ada pemenangnya
var persons3 = ['Andi', 'Betty'];
var tracks3 = ['AAAB', ''];
console.log(mazeRunner(persons3, tracks3));
// [ 'Andi' ]