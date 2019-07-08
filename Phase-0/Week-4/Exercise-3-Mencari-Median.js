/* Phase 0 Week 4 Exercise 3 */
/* Mencari Median */

function cariMedian(arr) {
    var length = arr.length;
    var mid = 0;
    var median = 0;
    if (length % 2 === 0) {
        mid = length / 2;
        median = (arr[mid] + arr[mid-1]) / 2;
    } else {
        mid = Math.floor(length / 2);
        median = arr[mid];
    }
    return median;
}

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5