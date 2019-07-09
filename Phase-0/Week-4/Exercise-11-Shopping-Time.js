/* Phase 0 Week 4 Exercise 11 */
/* Shopping Time */

function shoppingTime(memberId, money) {
    // Deklarasi variabel object untuk member
    var memberObj = {
        memberId: memberId,
        money: money,
        listPurchased: [],
        changeMoney: 0
    };
    // Deklarasi variabel object untuk product
    var productObj = {
        productName: ["Sepatu Stacattu", 
                      "Baju Zoro", 
                      "Baju H&N", 
                      "Sweater Uniklooh", 
                      "Casing Handphone"
                    ],
        productPrice: [1500000, 
                       500000, 
                       250000, 
                       175000, 
                       50000
                    ]
    };
    // Jika member ID tidak diisi atau kosong maka tampilkan pesan error
    if (memberObj.memberId === "" || memberObj.memberId === undefined) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    } 
    // Jika uang member dibawah 50rb maka tampilkan pesan error
    else if (memberObj.money < 50000) {
        return "Mohon maaf, uang tidak cukup";
    }
    // Jika semua memenuhi maka lakukan perhitungan 
    else {
        // Lakukan perulangan sebanyak jumlah product yang bisa dibeli
        var productLength = productObj.productName.length;
        for (var i = 0; i < productLength; i++) {
            // Jika uang member diatas harga product termahal
            if (memberObj.money >= productObj.productPrice[i]) {
                // Masukkan nama product ke array listPurchased
                memberObj.listPurchased.push(productObj.productName[i]);
                // Kurangi uang member sekarang dengan harga product saat ini
                memberObj.money = memberObj.money - productObj.productPrice[i];
                // Masukkan sisa uang member saat ini
                memberObj.changeMoney = memberObj.money;
            }
        }
        // Set ulang uang member ke kondisi semula
        memberObj.money = money;
        return memberObj;
    }
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja