// TEST LATIHAN 1

function manualSort(numbers) {
    // ================ Splice Method =================
    var result = [];
    var i = 0;
    while ( i < numbers.length ) {
        var smallest = numbers[0];
        var indexSmallest = 0;
        var flag = false;
        for (var j = 0; j < numbers.length; j++) {
            if (numbers[j] <= smallest) {
                smallest = numbers[j];
                indexSmallest = j;
                flag = true;
            }
        }
        if (flag) {
            result.push(smallest);
            numbers.splice(indexSmallest,1);
        } else {
            result.push(numbers[0]);
            numbers.splice(0,1);
            i++;
        }
    }
    return result;
    // ================== Bubble Sort ==================
    // var flag = true;
    // while (flag) {
    //     flag = false;
    //     for (var i = 0; i < numbers.length; i++) {
    //         if (numbers[i] > numbers[i+1]) {
    //             var temp = numbers[i];
    //             numbers[i] = numbers[i+1];
    //             numbers[i+1] = temp;
    //             flag = true;
    //         }
    //     }
    // }
    // return numbers;
}

console.log(manualSort([3, 4, 2, 1, 5, 8, 7, 6, 7]));
// [1, 2, 3, 4, 5, 6, 7]
