/* Phase 0 Week 2 Exercise 4 */
/* Program Tanggal */

var tanggal = 0;    // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 0;      // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 0;      // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

function formatTanggal(tanggal,bulan,tahun) {
    if (tanggal > 0 && tanggal <= 31) {
        if (bulan > 0 && bulan <= 12) {
            if(tahun >= 1900 && tahun <= 2200) {
                switch (bulan) {
                    case 1 : {
                        bulan = "Januari";
                        break;
                    }
                    case 2 : {
                        bulan = "Februari";
                        break;
                    }
                    case 3 : {
                        bulan = "Maret";
                        break;
                    }
                    case 4 : {
                        bulan = "April";
                        break;
                    }
                    case 5 : {
                        bulan = "Mei";
                        break;
                    }
                    case 6 : {
                        bulan = "Juni";
                        break;
                    }
                    case 7 : {
                        bulan = "Juli";
                        break;
                    }
                    case 8 : {
                        bulan = "Agustus";
                        break;
                    }
                    case 9 : {
                        bulan = "September";
                        break;
                    }
                    case 10 : {
                        bulan = "Oktober";
                        break;
                    }
                    case 11 : {
                        bulan = "November";
                        break;
                    }
                    case 12 : {
                        bulan = "Desember";
                        break;
                    }
                } 
                console.log(tanggal + " " + bulan + " " + tahun);
            }
            else {
                console.log("Format tahun yang dimasukkan salah!");
            }
        }
        else {
            console.log("Format bulan yang dimasukkan salah!");
        }
    }
    else {
        console.log("Format tanggal yang dimasukkan salah!");
    }
}

formatTanggal(8,9,1989);