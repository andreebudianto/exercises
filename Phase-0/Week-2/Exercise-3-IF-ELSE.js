/* Phase 0 Week 2 Exercise 3 */
/* Program Proxytia */

var nama  = "";     // Variabel yang menampung nama Anda
var peran = "";     // Anda dapat memilih peran = Ksatria, Tabib, Penyihir

function cekPeran(nama,peran) {
    if (nama === "") {
        console.log("Nama harus diisi!");
    } 
    else if (peran === "") {
        console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
    }
    else if (peran === "Ksatria") {
        console.log("Selamat datang di Dunia Proxytia, " + nama);
        console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
    }
    else if (peran === "Tabib") {
        console.log("Selamat datang di Dunia Proxytia, " + nama);
        console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.");
    }
    else if (peran === "Penyihir") {
        console.log("Selamat datang di Dunia Proxytia, " + nama);
        console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
    }
    else {
        console.log("Halo " + nama + ", Silahkan pilih peran Ksatria atau Tabib atau Penyihir.");
    }
}

cekPeran('','');                //Output untuk Input nama = '' dan peran = ''
cekPeran('Mikael','');          //Output untuk Input nama = 'Mikael' dan peran = ''
cekPeran('Nina','Ksatria');     //Output untuk Input nama = 'Nina' dan peran 'Ksatria'
cekPeran('Danu','Tabib');       //Output untuk Input nama = 'Danu' dan peran 'Tabib'
cekPeran('Zero','Penyihir');    //Output untuk Input nama = 'Zero' dan peran 'Penyihir'