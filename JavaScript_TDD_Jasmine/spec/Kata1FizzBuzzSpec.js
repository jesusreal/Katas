var fibu = new FizzBuzz();


describe('Fizz Buzz Test Suite', function() {
  it ('input 1, result 1', function(){
    var input = 1;
    var result = fibu.expectedValues[input.toString()];
    expect(fibu.checkNumber(input)).toEqual(result);
  });
  it ('input 2, result 2', function(){
    var input = 2;
    var result = fibu.expectedValues[input];
    expect(fibu.checkNumber(input)).toEqual(result);
  });
  it ('input 3, result fizz', function(){
    var input = 3;
    var result = fibu.expectedValues[input];
    expect(fibu.checkNumber(input)).toEqual(result);
  });
  it ('input 4, result 4', function(){
    var input = 4;
    var result = fibu.expectedValues[input];
    expect(fibu.checkNumber(input)).toEqual(result);
  });
  it ('input 5, result buzz', function(){
    var input = 5;
    var result = fibu.expectedValues[input];
    expect(fibu.checkNumber(input)).toEqual(result);
  });
  it ('input 6, result fizz', function(){
    var input = 6;
    var result = fibu.expectedValues[input];
    expect(fibu.checkNumber(input)).toEqual(result);
  });
  it ('input 10, result buzz', function(){
    var input = 10;
    var result = fibu.expectedValues[input];
    expect(fibu.checkNumber(input)).toEqual(result);
  });
  it ('input 15, result fizzbuzz', function(){
    var input = 15;
    var result = fibu.expectedValues[input];
    expect(fibu.checkNumber(input)).toEqual(result);
  });
});

