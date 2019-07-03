/* Phase 0 Week 2 Exercise 9 */
/* Program Function */

/* 1. Task 1 */
function shoutOut() {
    return "Halo Function!";
}

console.log(shoutOut());

/* 2. Task 2 */
function calculateMultiply(num1,num2) {
    return num1 * num2;
}
var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1,num2);

console.log(hasilPerkalian);

/* 3. Task 3 */
function processSentence(name,age,address,hobby) {
    return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";
var fullSentence = processSentence(name,age,address,hobby);

console.log(fullSentence);