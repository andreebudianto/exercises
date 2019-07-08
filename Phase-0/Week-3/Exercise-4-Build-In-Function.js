/* Phase 0 Week 3 Exercise 4 */
/* Build-in Function */

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(array) {
    // Fitur Splice
    array.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(array);

    // Fitur Split
    var tglLahir = array[3].split("/");
    switch (tglLahir[1]) {
        case "01" : {
            console.log("Januari");
            break;
        }
        case "02" : {
            console.log("Februari");
            break;
        }
        case "03" : {
            console.log("Maret");
            break;
        }
        case "04" : {
            console.log("April");
            break;
        }
        case "05" : {
            console.log("Mei");
            break;
        }
        case "06" : {
            console.log("Juni");
            break;
        }
        case "07" : {
            console.log("Juli");
            break;
        }
        case "08" : {
            console.log("Agustus");
            break;
        }
        case "09" : {
            console.log("September");
            break;
        }
        case "10" : {
            console.log("Oktober");
            break;
        }
        case "11" : {
            console.log("November");
            break;
        }
        case "12" : {
            console.log("Desember");
            break;
        }
        default : {
            console.log("Bulan yang dimasukkan salah!");
            break;
        }
    }

    // Fitur Sort
    var tglLahirSort = tglLahir.slice();
    tglLahirSort.sort(function(value1, value2) { return value2 - value1 });
    console.log(tglLahirSort);

    // Fitur Join
    var tglLahirJoin = tglLahir.join("-");
    console.log(tglLahirJoin);

    // Fitur Slice
    var nama = array[1].slice(0, 15);
    console.log(nama);
}

dataHandling2(input);