// Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum

class Solution {
    int maxCounterCurrent = 0;
    int maxCounterOnLastMaxCounterInvoked = 0;

    public int[] solution(int N, int[] A) {
        int[] counters = new int[N];
        // write your code in Java SE 8
        for (int operation:A) {
            if (operation != N+1) {
                int index = operation - 1;
                increase(counters, index);
            }
            else
                maxCounter();
        }
        updateCounterValues(counters, N);
        return counters;
    }
    
    private void increase(int[] counters, int index) {
        if (counters[index] < maxCounterOnLastMaxCounterInvoked)
            counters[index] = maxCounterOnLastMaxCounterInvoked + 1;
        else
            counters[index]++;
        int counterNewValue = counters[index]; 
        if (counterNewValue > maxCounterCurrent)
            maxCounterCurrent = counterNewValue;
    }
 
    private void maxCounter() {
        maxCounterOnLastMaxCounterInvoked = maxCounterCurrent;
    } 
    
    private void updateCounterValues (int[] counters, int amountOfCounters) {
        for(int i=0; i<amountOfCounters; i++) {
            if (counters[i] < maxCounterOnLastMaxCounterInvoked)
                counters[i] = maxCounterOnLastMaxCounterInvoked;
        }
    }
}