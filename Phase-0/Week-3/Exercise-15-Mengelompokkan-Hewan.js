/* Phase 0 Week 3 Exercise 15 */
/* Kelompok Hewan */

function groupAnimals(arr) {
    // Deklarasi variable array baru untuk menampung hasil sort
    var arrDouble = [];
    var arrResult = [];
    var arrSort = arr.sort();
    var init0 = "";
    var length = arr.length;
    // Lakukan perulangan untuk setiap data dalam array
    for (var i = 0; i < length; i++) {
        var init1 = arrSort[i].substr(0,1);
        if (init0 !== init1) {
            for (var j = 0; j < length; j++) {
                var init2 = arr[j].substr(0,1);
                if (init1 === init2) {
                    arrDouble.push(arr[j]);
                }
            }
            arrResult.push(arrDouble);
            arrDouble = [];
            init0 = init1;
        }
    }
    return arrResult;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]