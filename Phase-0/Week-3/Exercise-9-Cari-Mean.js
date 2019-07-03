/* Phase 0 Week 3 Exercise 9 */
/* Cari Mean */

function cariMean(arr) {
    var total = 0;
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        var num = parseInt(arr[i]);
        total = total + num;
    }
    var average = Math.round(total / length);
    return average;
}

console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7