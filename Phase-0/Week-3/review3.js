// TEST LATIHAN 2

function manualSort(numbers) {
  var result = [];
  var temp = [];
  var i = 0;
  while (i < numbers.length) {
    var flag = false;
    var smallest = numbers[i][0];
    var indexSmallest = 0;
    for (var j = 0; j < numbers[i].length; j++) {
      if (numbers[i][j] <= smallest) {
        smallest = numbers[i][j];
        indexSmallest = j;
        flag = true;
      }
    }
    if (flag) {
      temp.push(smallest);
      numbers[i].splice(indexSmallest,1);
    } else {
      result.push(temp.slice());
      numbers[i].splice(0,1);
      temp = [];
      i++;
    }
  }
  return result;
  // ===================== Bubble Sort ===================
  // var flag = true;
  // while (flag) {
  //   flag = false;
  //   for (var i = 0; i < numbers.length; i++) {
  //     for (var j = 0; j < numbers[i].length; j++) {
  //       if (numbers[i][j] > numbers[i][j+1]) {
  //         var temp = numbers[i][j];
  //         numbers[i][j] = numbers[i][j+1];
  //         numbers[i][j+1] = temp;
  //         flag = true;
  //        }
  //     }
  //   }
  // }
  // return numbers;
}

console.log(manualSort([[3, 4, 2], [5, 1, 6, 7]]));
/*
  [
    [2, 3, 4],
    [1, 5, 6, 7]
  ]
*/
