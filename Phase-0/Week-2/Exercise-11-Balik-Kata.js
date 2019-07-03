/* Phase 0 Week 2 Exercise 11 */
/* Program Word Reverse */

function balikKata(kata) {
    var reverse = "";
    var length = kata.length;
    for (var i = length; i > 0; i--) {
        reverse = reverse + kata[i-1];
    }
    return reverse;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS