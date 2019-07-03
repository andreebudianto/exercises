/* Phase 0 Week 3 Exercise 13 */
/* Target Terdekat */

function targetTerdekat(arr) {
    var charo = [];
    var charx = [];
    length = arr.length;
    for (var i = 0; i < length; i++) {
        if (arr[i] === "o") {
            charo.push(i);
        } else if (arr[i] === "x") {
            charx.push(i);
        }
    }
    if (charx.length === 0) {
        return 0;
    } else {
        var olength = charo.length;
        var xlength = charx.length;
        var shortest = 0;
        for (var o = 0; o < olength; o++) {
            for (var x = 0; x < xlength; x++) {
                var diff = 0;
                diff = Math.abs(charx[x] - charo[o]);
                if (shortest === 0) {
                    shortest = diff;
                } else {
                    if (shortest > diff) {
                        shortest = diff;
                    }
                }
            }
        }
        return shortest;
    }
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2