// Find the minimal positive integer not occurring in a given sequence

function solution(A) {
  // write your code in JavaScript (ECMA-262, 5th edition)
  var sortedNumbers = A;
  sortedNumbers.sort(function(a,b){return a-b});
  var arrayLen = sortedNumbers.length;
  var minimalPositiveInteger = 1;
  var minimalPositiveIntegerNotInArray = minimalPositiveInteger;
  if (sortedNumbers[arrayLen-1] > 0 && sortedNumbers.indexOf(minimalPositiveInteger)!=-1) {
      for (var i=0; i<arrayLen-1; i++) {
          if (isNewMinimalPositiveIntegerNotInArray()) {
             minimalPositiveIntegerNotInArray = Math.max((sortedNumbers[i]+1), 1);
             break;
          }
      }
      if (notFoundMinimalPositiveInteger())
          minimalPositiveIntegerNotInArray = sortedNumbers[arrayLen-1] + 1;
  }
  return minimalPositiveIntegerNotInArray;
  
  function isNewMinimalPositiveIntegerNotInArray() {
      return (sortedNumbers[i+1]>1 && (sortedNumbers[i+1]-sortedNumbers[i])>1);
  }
  
  function notFoundMinimalPositiveInteger() {
     return (minimalPositiveIntegerNotInArray==minimalPositiveInteger && sortedNumbers.indexOf(minimalPositiveInteger)!=-1);
  }
}













