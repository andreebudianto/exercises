/* Phase 0 Week 4 Exercise 14 */
/* Naik Angkot */

function naikAngkot(arrPenumpang) {
    // Deklarasi variabel rute sebagai master rute
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    // Deklarasi variabel arrResult untuk menampung hasil object dalam bentuk array
    var arrResult = [];
    // Cek apakah array penumpang ada data atau tidak
    var length = arrPenumpang.length;
    if (length > 0) {
        // Lakukan perulangan sebanyak data array penumpang
        for (var i = 0; i < length; i++) {
            // Reset nilai variabel object penumpang
            var penumpangObj = {
                                penumpang: "",
                                naikDari: "",
                                tujuan: "",
                                bayar: 0
            };
            // Masukkan data penumpang
            penumpangObj.penumpang = arrPenumpang[i][0];
            penumpangObj.naikDari = arrPenumpang[i][1].toUpperCase();
            penumpangObj.tujuan = arrPenumpang[i][2].toUpperCase();
            // Lakukan pencarian rute asal dan akhir ada berada di index berapa saja
            var ruteLength = rute.length;
            var charAsal = 0;
            var charAkhir = 0;
            for (var j = 0; j < ruteLength; j++) {
                if (penumpangObj.naikDari === rute[j]) {
                    charAsal = j;
                } else if (penumpangObj.tujuan === rute[j]) {
                    charAkhir = j;
                }
            }
            // Lakukan perhitungan selisih index dikalikan 2.000 sebagai ongkos yang harus dibayar
            penumpangObj.bayar = (charAkhir - charAsal) * 2000;
            // Masukkan nilai object kedalam array result
            arrResult.push(penumpangObj);
        }
    }
    return arrResult;
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]