// Find the missing element in a given permutation.

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var amountOfNumbers = A.length;
    var sortedArray = A.sort(function(a,b){return a-b});
    var missingInteger = amountOfNumbers+1;
    for (var i=0; i<amountOfNumbers; i++) {
        var expectedInteger = i + 1;
        if (sortedArray[i] != expectedInteger) {
            missingInteger = expectedInteger;
            break;
        }
    }
    return missingInteger;
}














