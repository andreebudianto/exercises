function grade (grade1, grade2) {
    var array = ["A","B","C","D"];
    var grade1 = grade1.toUpperCase();
    var grade2 = grade2.toUpperCase();
    var index1 = 0;
    var index2 = 0;
    var result = "";
    if (grade1 > grade2) {
        var temp = grade1;
        grade1 = grade2;
        grade2 = temp;
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] === grade1) {
            index1 = i;
        }
        if (array[i] === grade2) {
            index2 = i;
        } 
    }
    var diff = index2 - index1;
    if (diff === 0) {
        result = array[index1];
    } else if (diff === 1) {
        result = array[index2]+"+";
    } else if (diff === 2) {
        result = array[index2-1];
    } else if (diff === 3) {
        result = array[index2-1]+"+";
    }

    return grade1+" + "+grade2+" : "+result;
}

console.log( grade ("D","C") );