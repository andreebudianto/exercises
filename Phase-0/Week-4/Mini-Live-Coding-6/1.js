/*
  ===========
  Fear Factor
  ===========

  [INSTRUCTIONS]
  Fear Factor adalah suatu fungsi untuk mengetahui dia bisa menjadi juara atau
  tidak.

  [EXAMPLE]
  Input:
  fearFactor = 'Single'
  weaknesses = ['Single', 'Jomblo', 'Tikus', 'Air']
  Output:
  Dia kalah karena kelemahan yang pertama

  [RULE]
  - WAJIB menggunakan PSEUDOCODE
  - Maksimal weaknesses ada 9
  - Tidak boleh menggunakan built in function selain .push() dan .unshift()
*/


/*
PSEUDOCODE
==========
READ AND SAVE arrayWeakness's value
READ AND SAVE factor's value
CREATE length SET the length of arrayWeakness
IF length LESS THAN 9 THEN
  DO
    DISPLAY "Maksimal weakness hanya 9"
ELSE
  CREATE flag SET true
  CREATE counter SET 0
  FOR counter LESS THAN length THEN
    CREATE bilangan SET empty string
    SWITCH counter
      CASE 0 SET bilangan TO "pertama"
      CASE 1 SET bilangan TO "kedua"
      CASE 2 SET bilangan TO "ketiga"
      CASE 3 SET bilangan TO "keempat"
      CASE 4 SET bilangan TO "kelima"
      CASE 5 SET bilangan TO "keenam"
      CASE 6 SET bilangan TO "ketujuh"
      CASE 7 SET bilangan TO "kedelapan"
      CASE 8 SET bilangan TO "kesembilan"
    END SWITCH
    IF arrayWeakness with index counter EQUALS TO factor THEN
      DO
        CREATE string SET "Dia kalah karena kelemahan yang " CONCAT with bilangan;
        SET flag TO false
    END IF
    INCREMENT counter
  END FOR
  IF flag IS true THEN
    DO 
      DISPLAY "Selamat dia juara"
  ELSE
      DISPLAY string
  END IF
END IF

*/

function fearFactorFunc(factor, weakAgainsts) {
  var length = weakAgainsts.length;
  if (length > 9) {
    console.log("Maksimal weaknesses hanya 9");
  } 
  else {
    var flag = true;
    for (var i = 0; i < weakAgainsts.length; i++) {
      var bilangan = "";
      switch (i) {
        case 0 : bilangan = "pertama"; break;
        case 1 : bilangan = "kedua"; break;
        case 2 : bilangan = "ketiga"; break;
        case 3 : bilangan = "keempat"; break;
        case 4 : bilangan = "kelima"; break;
        case 5 : bilangan = "keenam"; break;
        case 6 : bilangan = "ketujuh"; break;
        case 7 : bilangan = "kedelapan"; break;
        case 8 : bilangan = "kesembilan"; break;
      }
      if (weakAgainsts[i] === factor) {
        var string = "Dia kalah karena kelemahan yang " + bilangan;
        flag = false;
      }
    }
    if (flag) {
      console.log("Selamat dia juara");
    } else {
      console.log(string);
    }
  }
};

var fearFactor = 'Single';
var weaknesses = ['Single', 'Jomblo', 'Tikus', 'Air'];
fearFactorFunc(fearFactor, weaknesses);
// Dia kalah karena kelemahan yang pertama

var fearFactor2 = 'Menikah';
var weaknesses2 = ['Single', 'Jomblo', 'Tikus', 'Air'];
fearFactorFunc(fearFactor2, weaknesses2);
// Selamat dia juara

var fearFactor3 = 'Menikah';
var weaknesses3 = ['Single', 'Jomblo', 'Tikus', 'Air', 'Makan', 'Menari', 'Menyanyi', 'Dandan', 'Menikah'];
fearFactorFunc(fearFactor3, weaknesses3);
// Dia kalah karena kelemahan yang kesembilan

var fearFactor4 = 'Menikah';
var weaknesses4 = ['Single', 'Jomblo', 'Tikus', 'Air', 'Makan', 'Menari', 'Menyanyi', 'Dandan', 'Jomblo Fisabilillah'];
fearFactorFunc(fearFactor4, weaknesses4);
// Selamat dia juara
