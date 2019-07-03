/* Phase 0 Week 2 Exercise 6 */
/* Program Looping */

/* 1. Do Looping By Using While */
function firstWhileLoop(){
    var counter = 0;
    console.log("LOOPING PERTAMA");
    while (counter < 20) {
        counter += 2;
        console.log(counter + " - I love coding");
    }
}
function secondWhileLoop(){
    var counter = 20;
    console.log("LOOPING KEDUA");
    while (counter > 0) {
        console.log(counter + " - I will become fullstack developer");
        counter -= 2;
    }
}

firstWhileLoop();
secondWhileLoop();

/* 2. Do Looping By Using For */
function firstForLoop(){
    console.log("LOOPING PERTAMA");
    for (var counter = 1; counter <= 20; counter++) {
        console.log(counter + " - I love coding");
    }
}
function secondForLoop(){
    console.log("LOOPING KEDUA");
    for (var counter = 20; counter > 0; counter--) {
        console.log(counter + " - I will become fullstack developer");
    }
}

firstForLoop();
secondForLoop();

/* 3. Odd and Even Number */
function firstOddEvenLoop(){
    for (var counter = 1; counter <= 100; counter++) {
        if (counter % 2 === 0) {
            console.log("GENAP");
        } else{
            console.log("GANJIL");
        }
    }
}
function secondOddEvenLoop(){
    for (var counter = 1; counter <= 100; counter += 2) {
        if (counter % 3 === 0) {
            console.log(counter + " KELIPATAN 3");
        } else{
            console.log("");
        }
    }
}
function thirdOddEvenLoop(){
    for (var counter = 1; counter <= 100; counter += 5) {
        if (counter % 6 === 0) {
            console.log(counter + " KELIPATAN 6");
        } else{
            console.log("");
        }
    }
}
function fourthOddEvenLoop(){
    for (var counter = 1; counter <= 100; counter += 9) {
        if (counter % 10 === 0) {
            console.log(counter + " KELIPATAN 10");
        } else{
            console.log("");
        }
    }
}

firstOddEvenLoop();
secondOddEvenLoop();
thirdOddEvenLoop();
fourthOddEvenLoop();
