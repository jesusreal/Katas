// Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R)

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var amountOfValues = A.length;
    var sortedArray = A.sort(function(a,b){return a-b});
    var maxTriplet = sortedArray[amountOfValues-3] * sortedArray[amountOfValues-2] * sortedArray[amountOfValues-1];
    if (tripletWithNegativeNumbersMightBeHigher) {
        var maxTripletWithNegativeNumbers = sortedArray[0] * sortedArray[1] * sortedArray[amountOfValues-1];
        if (maxTripletWithNegativeNumbers > maxTriplet)
            maxTriplet = maxTripletWithNegativeNumbers;
    }
    
    function tripletWithNegativeNumbersMightBeHigher() {
        return (amountOfValues>3 && sortedArray[1]<0);
    }
    
    return maxTriplet;
}














