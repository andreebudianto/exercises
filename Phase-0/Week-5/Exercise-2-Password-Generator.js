/* Phase 0 Week 5 Exercise 2 */
/* Password Generator */

function changeVocals (str) {
    // Buat array kosong untuk menampung isi dari string karena klo bentuk masih string tidak dapat diganti valuenya
    var arrstr = [];
    // Copy semua isi string ke dalam array
    var length = str.length;
    for (var i = 0; i < length; i++) {
        arrstr.push(str[i]);
    }
    // Lakukan perulangan untuk mengganti huruf vokal
    for (var j = 0; j < arrstr.length; j++) {
        switch (arrstr[j]) {
            case "a" : { arrstr[j] = "b"; break; }
            case "e" : { arrstr[j] = "f"; break; }
            case "i" : { arrstr[j] = "j"; break; }
            case "o" : { arrstr[j] = "p"; break; }
            case "u" : { arrstr[j] = "v"; break; }
            case "A" : { arrstr[j] = "B"; break; }
            case "E" : { arrstr[j] = "F"; break; }
            case "I" : { arrstr[j] = "J"; break; }
            case "O" : { arrstr[j] = "P"; break; }
            case "U" : { arrstr[j] = "V"; break; }
        }
    }
    // Join array menjadi string
    var newstr = arrstr.join("");
    return newstr;
}

function reverseWord (str) {
    // Lakukan perulangan dari belakang untuk membalikkan string
    var newstr = "";
    var length = str.length;
    for (var i = length; i > 0; i--) {
        newstr = newstr + str[i-1];
    }
    return newstr;
}

function setLowerUpperCase (str) {
    // Deklarasi master abjad huruf kecil dan huruf besar
    var kecil = "abcdefghijklmnopqrstuvwxyz";
    var besar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Lakukan perulangan untuk mencari apakah huruf kecil atau besar
    var newstr = "";
    var length = str.length;
    for (var i = 0; i < length; i++) {
        var flag = false;
        // Jika huruf kecil maka ganti menjadi huruf besar
        for (var j = 0; j < kecil.length; j++) {
            if (str[i] === kecil[j]) {
                newstr = newstr + besar[j];
                flag = true;
            }
        }
        // Jika huruf besar maka ganti menjadi huruf kecil
        if (flag === false) {
            for (var k = 0; k < besar.length; k++) {
                if (str[i] === besar[k]) {
                    newstr = newstr + kecil[k];
                    flag = true;
                }
            }
        }
        // Jika bukan huruf kecil dan besar maka tampilkan karakter tersebut
        if (flag === false) {
            newstr = newstr + str[i];
            flag = true;
        }
    }
    return newstr;
}

function removeSpaces (str) {
    var newstr = "";
    var length = str.length;
    // Lakukan perulangan untuk memasukkan karakter yang bukan spasi
    for (var i = 0; i < length; i++) {
        if (str[i] !== " ") {
            newstr = newstr + str[i];
        }
    }
    return newstr;
}

function passwordGenerator (name) {
    var vocal = changeVocals(name);
    var reverse = reverseWord(vocal);
    var setcase = setLowerUpperCase(reverse);
    var result = removeSpaces(setcase);
    // Jika panjang password kurang dari 5 maka tampilkan pesan error
    if (result.length >= 5) {
        return result;
    } else {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'