/* 
=================
StandBackTriangel
=================

Standback Triangel adalah program untuk mengegenerate Segitiga yang ujungnya mengarah ke kanan.
dengan character huruf 'o' sebagai sisi nya 

[INSTRUCTION]
diberikan input berupa width , yaitu lebar segitiga. 

[Example]
jika width = 3 maka : 

123 <-- width 
  o
 oo
o o
 oo
  o

[RULE]
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()


*/

function standBackTriangel(width) {
  // Lakukan perulangan sebanyak dua kali panjang width nya dan dikurang 1 agar bisa looping selanjutnya lagi tanpa harus pakai 2 nested for
  for (var i = 0; i < (width*2)-1; i++) {
    // Reset variabel string setiap perulangan baris baru
    var string = "";
    // Lakukan perulangan untuk membuat kolom
    for (var j = 0; j < width; j++) {
      // Jika nilai width-1 dikurangi i sama dengan j maka tampilkan o agar dia membuat garis dari kanan ke kiri
      if ( (width-1) - i === j ) {
        string = string + "o";
      } 
      // Jika nilai i dikurangi width+1 sama dengan j maka tampilkan o agar dia membuat garis dari kanan ke kiri
      else if ( (i-width)+1 === j ) {
        string = string + "o";
      } 
      // Jika j adalah indeks terakhir selalu tampilkan o agar dia rata kanan
      else if ( j === (width-1) ) {
        string = string + "o";
      } 
      // Selain itu tampilkan spasi
      else {
        string = string + " ";
      }
    }
    console.log(string);
  }
  // ================ Double For ===================
  // for (var i = width; i > 0; i-- ) {
  //   var string = "";
  //   for (var j = 0; j < width; j++) {
  //     if ( (i-1) === j || j === width-1) {
  //       string = string + "o";
  //     } else {
  //       string = string + " ";
  //     }
  //   }
  //   console.log(string);
  // }
  // for (var i = 0; i < width; i++ ) {
  //   var string = "";
  //   for (var j = 0; j < width; j++) {
  //     if ( i === j || j === width-1) {
  //       string = string + "o";
  //     } else {
  //       string = string + " ";
  //     }
  //   }
  //   console.log(string);
  // }
}
 
 standBackTriangel( 3 )
 standBackTriangel( 5 )
 
 /*
 input:5
  
     o 
    oo 
   o o 
  o  o 
 o   o 
  o  o 
   o o 
    oo 
     o 
 
 input:3
 
   o 
  oo 
 o o 
  oo 
   o 
 
 
 */