function FizzBuzz() {
  this.expectedValues = {
    '1': 1,
    '2': 2,
    '3': 'fizz',
    '4': 4,
    '5': 'buzz',
    '6': 'fizz',
    '10': 'buzz',
    '15': 'fizzbuzz'
  };
  // The production source code.
  this.checkNumber = function(num) {
    var returnVal = num;
    if (num%3 === 0) {
      returnVal = "fizz";  
    }
    if (num%5 === 0) {
      if (returnVal === num) {
        returnVal = "buzz";
      }
      else {
        returnVal += "buzz";
      }
    }
    return returnVal;
  };
}