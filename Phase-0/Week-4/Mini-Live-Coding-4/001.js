/*
    ============
    PAIR PROJECT 
    ============

    [INSTRUCTION]
    saat nya phase 0 mengerjakan project secara pair ( berpasangan / berdua ). 
    dalam pembagian kelompok student, ada kriteria yang harus dipenuhi yaitu 
    setiap kelompok yang dipasangkan harus memiliki huruf depan ( inisial ) yang 
    BERBEDA. 
    
    pada kelas ini , jumlahnya selalu genap dan murid yang memiliki inisial yang sama 
    tidak lebih dari 2 orang

    ketentuan : 
    - jika murid berjumlah ganjil output : "Jumlah murid harus genap"
    - tambahkan test case lain bila diperlukan 

    [Example]
    input : ["asep","baqi","jajang","junaedi","iqbal","toni"]
    output : ["asep and baqi","jajang and iqbal","junaedi and toni"]

    [RULE]
    - dilarang menggunakan build in function array apapun kecuali push() 
    - Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
    - Dilarang menggunakan regex .match dan lainnya!
    - Dilarang menggunakan built in function .indexOf() dan .include()
    
*/

// Buat function untuk mengecek apakah murid berada di array list murid yang telah dipasangkan
function checkedList(list, name) {
    for (var i = 0; i < list.length; i++) {
        // Jika ditemukan maka return nilai true
        if (list[i] === name) {
            return true;
        }
    }
    // Jika tidak ditemukan maka return nilai false
    return false;
}

function pairProject( students ) {
    // Pertama-tama buat variabel result untuk menampung hasil student yang telah dipasangkan
    var result = [];
    // Cari panjang array jika genap maka lanjutkan proses
    var length = students.length;
    if (length % 2 === 0) {
        // Lakukan perulangan sebanyak student
        for (var i = 0; i < length-1; i++) {
            // Jika ketemu initial yang sama maka tukar nama dengan nama selanjutnya dan push setelah ditukar dan pindah ke 2 index berikutnya
            if (students[i][0] === students[i+1][0]) {
                // Lakukan swap nama jika indeks saat ini bukan dua index terakhir
                if (i !== length-2) {
                    var temp = students[i+1];
                    students[i+1] = students[i+2];
                    students[i+2] = temp;
                    result.push(students[i] + " and " + students[i+1]);
                    i++;
                } 
                // Apabila ketemu initial yang sama pada saat akhir array maka cek array result untuk swap dengan hasil sebelumnya
                else {
                    // Cari pasangan nama sebelumnya di array result
                    for (var j = (result.length-1); j >= 0; j--) {
                        // Split array agar mendapat nama pasangan murid sebelumnya
                        var prevStudent = result[j].split(" and ");
                        // Cek apakah pasangan nama tersebut memiliki initial yang sama atau tidak
                        // Jika sama cari pasangan nama sebelumnya lagi, jika tidak maka lakukan proses swap dengan array result sebelumnya
                        if (students[i][0] !== prevStudent[0][0] && students[i][0] !== prevStudent[1][0] ) {
                            // Buat pasangan baru dengan menukar pasangan nama sebelumnya
                            var firstString = prevStudent[0] + " and " + students[i];
                            var secondString = prevStudent[1] + " and " + students[i+1];
                            // Ganti nilai result array saat ini dengan yang baru
                            result[j] = firstString;
                            // Push pasangan nama yang baru
                            result.push(secondString);
                            // Hentikan proses swap
                            break;
                        }
                    }
                }
            } 
            // Jika tidak sama maka langsung push ke array result dan pindah ke 2 index berikutnya 
            else {
                result.push(students[i] + " and " + students[i+1]);
                i++;
            }
        }
        return result;
    } 
    // Jika ganjil maka munculkan pesan error
    else {
        return "Jumlah murid harus genap";
    }
    // ============================ Index Method ==============================
    // // Buat array result untuk menampung pasangan murid yang berbeda initial
    // var result = [];
    // var length = students.length;
    // // Jika jumlah murid genap maka lakukan proses pemasangan
    // if (length % 2 === 0) {
    //     // Proses pengecekan apakah initial yang sama ditemukan lebih dari dua
    //     var countInit = 0;
    //     for (var i = 0; i < length; i++) {
    //         var counter = 0;
    //         for (var j = 0; j < length; j++) {
    //             if (students[i][0] === students[j][0]) {
    //                 counter++;
    //             }
    //         }
    //         if (counter > countInit) {
    //             countInit = counter;
    //         }
    //         // Jika ditemukan lebih dari dua maka return error
    //         if (countInit > 2) {
    //             return "Initial murid tidak boleh sama lebih dari dua kali";
    //         }
    //     }
    //     // Apabila tidak ada initial lebih dari dua maka lanjutkan proses
    //     // Buat arrayChecked untuk menampung nama murid yang udah dipasangkan
    //     var arrayChecked = [];
    //     // Lakukan perulangan sebanyak jumlah murid - 1 agar mencegah error pada saat di array terakhir
    //     for (var k = 0; k < length-1; k++) {
    //         // Cek apakah nama sekarang sudah berada di arrayChecked atau belum
    //         var checkFirstName = checkedList(arrayChecked, students[k]);
    //         // Jika belum ada maka lanjut proses cari nama kedua
    //         if (checkFirstName === false) {
    //             // Lakukan perulangan mulai dari 1 karena kita harus proses murid selanjutnya
    //             for (var l = 1; l < length; l++) {
    //                 // Cek lagi apakah murid berikutnya sudah ada di arrayChecked atau belum
    //                 var checkSecondName = checkedList(arrayChecked, students[l]);
    //                 // Jika belum ada maka lanjutkan proses
    //                 if (checkSecondName === false) {
    //                     // Jika initial murid pertama tidak sama dengan murid kedua maka simpan data kedua murid ke arrayChecked dan result
    //                     if (students[k][0] !== students[l][0]) {
    //                         var string = students[k] + " and " + students[l];
    //                         result.push(string);
    //                         arrayChecked.push(students[k], students[l]);
    //                         // Hentikan pencarian agar mencegah dia membuat murid baru lagi
    //                         break;
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //     return result;
    // } 
    // // Jika tidak maka return pesan error
    // else {
    //     return "Jumlah murid harus genap";
    // }
}

console.log( pairProject(["Aries","Awtian","Momotaro","Yoki","Icha","Wika","Wawan","Mimin","Ryan","Yogi","Aries","Awtian"]) )
/* 
[ 'Aries and Momotaro',
  'Awtian and Yoki',
  'Icha and Wika',
  'Wawan and Mimin',
  'Ryan and Yogi' ]
*/

console.log( pairProject(["asep","baqi","jajang","junaedi","iqbal","toni"]) )
/* 
    ["asep and baqi","jajang and iqbal","junaedi and toni"]
*/