function RomanNumerals() {
	var conversions = {
		'1000' : 'M',
		'500' : 'D',
		'100' : 'C',
		'50' : 'L',
		'10' : 'X',
		'5' : 'V',
		'1' : 'I'
	};

	this.numeralToRoman = function(input) {
		var result = '';
		
		var lastNum = undefined;
		for(var num in conversions){
			while(input>=num){
				var numLen = num.length;
				var powerOfTen = Math.pow(10,(numLen-1));
				// Special cases: IV, IX, XL, XC, CD, CM
				if(this.isSpecialCase(input,powerOfTen)){
					result += conversions[powerOfTen] + conversions[lastNum];
					input = input + powerOfTen - lastNum;
				}else{
					result += conversions[num];
					input -= num;
				}
			}
			lastNum = num;
		}

		// Working code before final refactoring
//		while (input>0) {
//			if((input>=900&&input<1000) || (input>=400&&input<500)) {
//				result += 'C';
//				input += 100;
//			}else if((input>=90&&input<100) || (input>=40&&input<50)) {
//				result += 'X';
//				input += 10;
//			}else if(input==4) {
//				result += 'I';
//				input += 1;
//			}else if(input>=1000) {
//				result += 'M';
//				input -= 1000;
//			}else if(input>=500) {
//				result += 'D';
//				input -= 500;
//			}else if(input>=100) {
//				result += 'C';
//				input -= 100;
//			}else if(input>=50) {
//				result += 'L';
//				input -= 50;
//			}else if(input>=10) {
//				result += 'X';
//				input -= 10;
//			}else if(input>=5) {
//				result += 'V';
//				input -= 5;
//			}else if(input>=1) {
//				result += 'I';
//				input--;
//			}
//		}

		return result;
	}
	
	
	this.isSpecialCase = function(input,powerOfTen) {
		return (input<1000 && parseInt(input/powerOfTen)%5==4)
	}


}