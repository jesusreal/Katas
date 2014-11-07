var p = new PrimeFactors();

describe('Prime Factors Test Suite', function() {
	it('input 1, output []', function() {
	    spyOn(p,'isDivisible');
	    var input = 1;
		expect(p.getPrimeFactors(input)).toEqual([]);
	    expect(p.isDivisible).not.toHaveBeenCalled();
	});
	it('input 2, output 2', function() {
		var input = 2;
		expect(p.getPrimeFactors(input)).toEqual([2]);
	});
	it('input 3, output [3]', function() {
		var input = 3;
		expect(p.getPrimeFactors(input)).toEqual([3]);
	});
	it('input 4, output [2, 2]', function() {
		var input = 4;
		expect(p.getPrimeFactors(input)).toEqual([2, 2]);
	});
	it('input 5, output [5]', function() {
		var input = 5;
		expect(p.getPrimeFactors(input)).toEqual([5]);
	});
	it('input 6, output [2, 3]', function() {
		var input = 6;
		expect(p.getPrimeFactors(input)).toEqual([2, 3]);
	});
	it('input 7, output [7]', function() {
		var input = 7;
		expect(p.getPrimeFactors(input)).toEqual([7]);
	});
	it('input 8, output [2, 2, 2]', function() {
		var input = 8;
		expect(p.getPrimeFactors(input)).toEqual([2, 2, 2]);
	});
	it('input 9, output [3, 3]', function() {
		var input = 9;
		expect(p.getPrimeFactors(input)).toEqual([3, 3]);
	});	
});
