function sum2DArray(input) {
    // [1,2,3] , [3,4,5] , [6,7,8,9]
    // [3,4,5] , [6,7,8,9]
    // [6,7,8,9]
    // []
    if (input.length === 0) {
        return 0;
    }
    return sum(input[0]) + sum2DArray(input.slice(1));
    // 6 + sum2DArray ([3,4,5] , [6,7,8,9])
    // 6 + 12 + sum2DArray([6,7,8,9])
    // 6 + 12 + 30 + sum2DArray ()
    // 6 + 12 + 30 + 0
    // 48
}

function sum(input) {
    // [1,2,3]
    // [2,3]
    // [3]
    // [0]
    if (input.length === 0 ) {
        return 0;
    }
    return input[0] + sum(input.slice(1));
    // 1 + sum([2,3])
    // 1 + 2 + sum([3])
    // 1 + 2 + 3 + sum([])
    // 1 + 2 + 3 + 0
    // 6
}


console.log(sum2DArray(
[
    [1,2,3], 
    [3,4,5], 
    [6,7,8,9]
]));