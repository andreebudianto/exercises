/* Phase 0 Week 3 Exercise 3 */
/* Looping Data Array */

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

function dataHandling(array) {
    var rowsLength = array.length;
    for (var i = 0; i < rowsLength; i++) {
        var colsLength = array[i].length;
        for (var j = 0; j < colsLength; j++) {
            switch (j) {
                case 0 : {
                    console.log("Nomor ID: " + array[i][j]);
                    break;
                }
                case 1 : {
                    console.log("Nama Lengkap: " + array[i][j]);
                    break;
                }
                case 2 : {
                    console.log("TTL: " + array[i][j] + " " + array[i][j+1]);
                    break;
                }
                case 4 : {
                    console.log("Hobi: " + array[i][j]);
                    break;
                }
            }
        }
        console.log("");
    }
}

dataHandling(input);