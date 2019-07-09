/* Phase 0 Week 4 Exercise 11 */
/* Shopping Time */

function shoppingTime(memberId, money) {
    var memberObj = {
        memberId: memberId,
        money: money,
        listPurchased: [],
        changeMoney: 0
    };
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
    if (memberObj.memberId === "" || memberObj.memberId === undefined) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    } else if (memberObj.money < 50000) {
        return "Mohon maaf, uang tidak cukup";
    } else {
        var productLength = productObj.productName.length;
        for (var i = 0; i < productLength; i++) {
            if (memberObj.money >= productObj.productPrice[i]) {
                memberObj.listPurchased.push(productObj.productName[i]);
                memberObj.money = memberObj.money - productObj.productPrice[i];
                memberObj.changeMoney = memberObj.money;
            }
        }
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