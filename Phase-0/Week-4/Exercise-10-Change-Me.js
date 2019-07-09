/* Phase 0 Week 4 Exercise 10 */
/* Change Me */

function changeMe(arr) {
    // Deklarasi awal variabel object literal
    var arrObj = {
        firstName: "",
        lastName: "",
        gender: "",
        age: ""
    };
    // Cari tanggal sekarang dan ambil tahun nya saja untuk menghitung umur
    var tglSkrg = new Date();
    var thnSkrg = tglSkrg.getFullYear(); 
    var length = arr.length;
    // Lakukan perulangan untuk menampilkan masing-masing nilai object dari array
    for (var i = 0; i < arr.length; i++) {
        // Set object class sesuai dengan nilai yang diberikan pada array
        arrObj.firstName = arr[i][0];
        arrObj.lastName = arr[i][1];
        arrObj.gender = arr[i][2];
        var thnLahir = arr[i][3];
        // Jika tahun lahir kosong atau tidak ditemukan atau tahun lahir lebih besar dari tahun sekarang maka set invalid year
        if (thnLahir === "" || thnLahir === undefined || thnLahir > thnSkrg) {
            arrObj.age = "Invalid Birth Year";
        } 
        // Jika tidak maka hitung umur
        else {
            arrObj.age = thnSkrg - thnLahir;
        }
        // Tampilkan ke monitor dengan format sebagai berikut
        var string = (i + 1) + ". " + arr[i][0] + " " + arr[i][1] + ":";
        console.log(string);
        console.log(arrObj);
    }
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""