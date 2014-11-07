var ronu = new RomanNumerals();

describe('Roman Numerals Test Suite', function() {
	var expectedValues = {
		'1' : 'I',
		'2' : 'II',
		'3' : 'III',
		'4' : 'IV',
		'5' : 'V',
		'6' : 'VI',
		'7' : 'VII',
		'8' : 'VIII',
		'9' : 'IX',
		'10' : 'X',
		'40' : 'XL',
		'44' : 'XLIV',
		'50' : 'L',
		'500' : 'D',
		'447' : 'CDXLVII',
		'1000' : 'M',
		'3398':  'MMMCCCXCVIII'
	};

	it('input 1, result I', function() {
		var input = 1;
		var result = expectedValues[input];
		expect(ronu.numeralToRoman(input)).toEqual(result);
	});
	it('input 2, result II', function() {
		var input = 2;
		var result = expectedValues[input];
		expect(ronu.numeralToRoman(input)).toEqual(result);
	});
	it('input 3, result III', function() {
		var input = 3;
		var result = expectedValues[input];
		expect(ronu.numeralToRoman(input)).toEqual(result);
	});
	it('input 4, result IV', function() {
		var input = 4;
		var result = expectedValues[input];
		expect(ronu.numeralToRoman(input)).toEqual(result);
	});
	it('input 5, result V', function() {
		var input = 5;
		var result = expectedValues[input];
		expect(ronu.numeralToRoman(input)).toEqual(result);
	});
	it('input 6, result VI', function() {
		var input = 6;
		var result = expectedValues[input];
		expect(ronu.numeralToRoman(input)).toEqual(result);
	});
	it('input 10, result X', function() {
		var input = 10;
		var result = expectedValues[input];
		expect(ronu.numeralToRoman(input)).toEqual(result);
	});
	it('input 40, result XL', function() {
		var input = 40;
		var result = expectedValues[input];
		expect(ronu.numeralToRoman(input)).toEqual(result);
	});	
	it('input 44, result XLIV', function() {
		var input = 44;
		var result = expectedValues[input];
		expect(ronu.numeralToRoman(input)).toEqual(result);
	});	
	it('input 50, result L', function() {
		var input = 50;
		var result = expectedValues[input];
		expect(ronu.numeralToRoman(input)).toEqual(result);
	});
	it('input 447, result CDXLVII', function() {
		var input = 447;
		var result = expectedValues[input];
		expect(ronu.numeralToRoman(input)).toEqual(result);
	});
	it('input 500, result D', function() {
		var input = 500;
		var result = expectedValues[input];
		expect(ronu.numeralToRoman(input)).toEqual(result);
	});
	it('input 1000, result M', function() {
		var input = 1000;
		var result = expectedValues[input];
		expect(ronu.numeralToRoman(input)).toEqual(result);
	});
	it('input 3398, result MMMCCCXCVIII', function() {
		var input = 3398;
		var result = expectedValues[input];
		expect(ronu.numeralToRoman(input)).toEqual(result);
	});

});
