// Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|. 

class Solution {
    public int solution(int[] A) {
        // write your code in Java SE 8
        int equilibriumIndex = getEquilibriumIndex(A);
        return equilibriumIndex;
    }
    
    private int getEquilibriumIndex(int[] A) {
        int sumForLowerIndexesValue = 0;
        int sumForHigherIndexesValue = getSumForArrayValues(A);
        for (int p=0; p<A.length; p++){               
            sumForHigherIndexesValue -= A[p];
            if (sumForLowerIndexesValue == sumForHigherIndexesValue)
                return p;
	    sumForLowerIndexesValue += A[p];
        }
      	return -1;
    }

    private int getSumForArrayValues(int[] A){
        int sum = 0;
        for(int i:A)
          sum += i;
        return sum;
    }


    
}