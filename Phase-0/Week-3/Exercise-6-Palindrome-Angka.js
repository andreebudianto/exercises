/* Phase 0 Week 3 Exercise 6 */
/* Palindrome Angka */

function angkaPalindrome(num) {
    // Lakukan penambahan variable num agar dapat mencari angka palindrome berikutnya
    num++;
    // Pertama harus ubah tipe variable number menjadi string agar bisa di balik
    var strNum = num.toString();
    var strNumBalik = "";
    for (var i = strNum.length; i > 0; i--) {
        strNumBalik = strNumBalik + strNum[i-1];
    }
    // Jika sudah mendapat angka yang sudah dibalik lakukan perbandingan
    if (strNum === strNumBalik) {
        return num;
    } else {
        return angkaPalindrome(num);
    }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001