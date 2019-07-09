/* Phase 0 Week 4 Exercise 12 */
/* Toko X */

function countProfit(shoppers) {
    // Daftar master barang sale
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    // Deklarasi variabel array untuk menampung setiap hasil profit masing-masing barang
    var arrResult = [];
    // Cari panjang array shopper dan array master barang
    var length = shoppers.length;
    var lengthBarang = listBarang.length;
    // Jika array shopper tidak kosong maka lakukan perhitungan
    if (length > 0) {
        // Lakukan perulangan untuk setiap produk pada master barang
        for (var i = 0; i < lengthBarang; i++) {
            // Reset variabel object profit untuk menampung setiap barang belanjaan yang ditemukan
            var profit = {
                product: "",
                shoppers: [],
                leftOver: 0,
                totalProfit: 0
            };
            profit.product = listBarang[i][0];
            // Cek pada array shopper apakah ada ditemukan barang 
            for (var j = 0; j < length; j++) {
                // Jika ditemukan maka cek apakah jumlah barang yang ingin dibeli mencukupi
                if (shoppers[j].product === listBarang[i][0]) {
                    // Jika jumlah barang mencukupi maka tambahkan nama shopper ke dalam object profit dan hitung sisa barang serta total profit
                    if (shoppers[j].amount <= listBarang[i][2]) {
                        profit.shoppers.push(shoppers[j].name);
                        listBarang[i][2] = listBarang[i][2] - shoppers[j].amount;
                        profit.totalProfit = profit.totalProfit + ( shoppers[j].amount * listBarang[i][1] );
                    }
                }
            }
            // Set jumlah barang tersisa adalah jumlah barang terakhir setelah dikurang
            profit.leftOver = listBarang[i][2];
            // Masukkan hasil object profit yang telah diproses
            arrResult.push(profit);
        }
    } 
    return arrResult;
}


console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]