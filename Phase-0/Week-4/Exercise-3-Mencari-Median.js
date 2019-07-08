/* Phase 0 Week 4 Exercise 3 */
/* Mencari Median */

function cariMedian(arr) {
    // Deklarasi variabel untuk menampung panjang array
    var length = arr.length;
    // Deklarasi variabel untuk menampung indeks tengah dari array
    var mid = 0;
    // Deklarasi variabel untuk menampung nilai median dari array
    var median = 0;
    // Jika panjang array genap maka lakukan perhitungan rata-rata
    if (length % 2 === 0) {
        mid = length / 2;
        median = (arr[mid] + arr[mid-1]) / 2;
    } 
    // Jika panjang array ganjil maka set variabel median dengan value indeks mid
    else {
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