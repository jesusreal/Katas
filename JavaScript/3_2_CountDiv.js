// Compute number of integers divisible by k in range [a..b]

function solution(A, B, K) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var amountOfDivisibleNumbers = 0;
//    if (A===0)
//        amountOfDivisibleNumbers++;
    if (K <= B) {
        firstDividendInInterval = K * Math.ceil(A/K);
        lastDividendInInterval = K * Math.floor(B/K);
        getAmountOfDivisibleNumbersInInterval();
    }
    else {
        if (A===0)
            amountOfDivisiBleNumbers = 1;
    }
    
    function getAmountOfDivisibleNumbersInInterval () {
        //for (var n=firstDividendInInterval; n<=B; n+=K)
          //  amountOfDivisibleNumbers++;
          amountOfDivisibleNumbers = (lastDividendInInterval-firstDividendInInterval)/K + 1;
    }
    
    return amountOfDivisibleNumbers;   
}
