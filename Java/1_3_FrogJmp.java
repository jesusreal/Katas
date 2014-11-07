// Count minimal number of jumps from position X to Y

class Solution {
    public int solution(int X, int Y, int D) {
        // write your code in Java SE 8
        //String[] A = new String[] {"J", "E", "S", "U", "S"}; 
        //Arrays.stream(A).forEach(System.out::println);
        int distanceFromXToY = Y - X;
        int amountOfJumps = (int) Math.ceil((double)distanceFromXToY/D);
        return amountOfJumps;
    }
}