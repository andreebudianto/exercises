/* Phase 0 Week 4 Exercise 4 */
/* Mencari Modus */

function cariModus(arr) {
    var modus = -1;
    var most = 1;
    var counter = 0;
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        counter = 0;
        for (var j = 0; j < length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
            }
        }
        if (counter === length) {
            modus = -1;
        } 
        else if (counter > most) {
            most = counter;
            modus = arr[i];
        }
    }
    return modus;
}

console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1