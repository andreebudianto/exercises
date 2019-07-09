/*
  ////////////
  Tiket Konser
  ////////////

  Buatlah suatu algoritma untuk pembelian tiket konser.

  [INSTRUCTIONS]
    1. Peserta konser akan membeli berdasarkan uang yang dia miliki, dan asumsi
       akan memilih harga yang paling mahal.
    2. Apabila peserta konser memiliki uang yang lebih rendah dari tiket konser,
       maka dia akan pulang ke rumah.
    3. Harga jenis kursi konser, antara lain:
      - VVIP 1000000
      - VIP  700000
      - Reguler 300000
    4. Apabila membeli tiket, tampilkan dalam format [nama]-[jenis kursi] dan [kembalian]

  [RULES]
    1. Hanya tulis Algoritma saja
*/

// type here



// Algorithm
// =========
// 1. Create a new variable named "money" to store current money that the person has.
// 2. Create a new variable named "name" to store the person's name.
// 3. Create a new variable named "seat" to store the seat class.
// 4. Create a new variable named "exchange" to store the exchange value.
// 5. Read and save the person's name to variable "name".
// 6. Read and save the money that the person has to variable "money".
// 7. Check the amount of money if the amount of money below 300000 then the person will go home.
// 8. Otherwise, if the amount of money below 700000 then the person will buy "Regular Ticket", set the "seat" variable value to "Reguler" and calculate "money" minus by 300000 and store the calculation result to variable "exchange".
// 9. Otherwise, if the amount of money below 1000000 then the person will buy "VIP Ticket", set the "seat" variable value to "VIP" and calculate "money" minus by 700000 and store the calculation result to variable "exchange".
// 10. Otherwise, if the amount of money above or equals to 1000000 then the person will buy "VVIP Ticket", set the "seat" variable value to "VVIP" and calculate "money" minus by 1000000 and store the calculation result to variable "exchange".
// 11. Then if the person has bought the ticket then display to the screen the value of each variable combined with this format ("name"-"seat" dan "exchange").