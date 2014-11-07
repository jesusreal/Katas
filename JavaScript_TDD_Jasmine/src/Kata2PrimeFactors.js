function PrimeFactors() {

	var primeNums = [];

	this.getPrimeFactors = function(num){
		var ind = 0;
		var factors = new Array();
		while(num>1){
			// Special case; primeNums array is empty
			if (primeNums.length==0 || ind==primeNums.length)
				var divisor = num;
			else						
				var divisor = primeNums[ind];
			if(this.isDivisible(num,divisor)){
				factors.push(divisor);
				if (num===divisor)
					primeNums.push(num);
				num = num / divisor;
			}
			else {
				ind++;
			}
		}
		return factors;
	};
	
	this.isDivisible = function(num,divisor) {
		if(num%divisor===0) return true;
		else                return false;
	};
}