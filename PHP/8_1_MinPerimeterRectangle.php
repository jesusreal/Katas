// Find the minimal perimeter of any rectangle whose area equals N.

function solution($N) {
    // write your code in PHP5.3
    $maxA = (int)round(sqrt($N));
    $perimeter = (int)(0);
    for ($A=$maxA; $A>=1; $A--) {
        if ($N%$A == 0) {
            $B = $N / $A;
            $perimeter = 2 * ($A+$B);
            break;
        }
    }
    return $perimeter;
}