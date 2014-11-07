// Find the earliest time when a frog can jump to the other side of a river

//100% correctness, 100% performance
// This one is a little bit more efficient
function solution(positionToGet, fallingLeaves) {
	var amountOfFallingLeaves = fallingLeaves.length;
	// write your code in JavaScript (ECMA-262, 5th edition)
    var earliestTimeToJump = -1;
	if (amountOfFallingLeaves >= positionToGet) {
        var positionFound = [];
        for (var i=0; i<positionToGet; i++)
            positionFound[i] = false;
        var position;
        var minuteForLastNewPosition;
        for (i=0; i<amountOfFallingLeaves; i++) {
        	position = fallingLeaves[i];
        	if (!positionFound[position-1]) {
            	positionFound[position-1] = true;
        		minuteForLastNewPosition = i;
        	} 
        }
        if (positionFound.indexOf(false)==-1)
        	earliestTimeToJump = minuteForLastNewPosition;
    }
    return earliestTimeToJump;
}

//100% correctness, 100% performance
//This one is a little bit less efficient
function solution(positionToGet, fallingLeaves) {
    // write your code in JavaScript (ECMA-262, 5th edition)
	var amountOfFallingLeaves = fallingLeaves.length;
    var earliestTimeToJump = -1;
    if (amountOfFallingLeaves >= positionToGet) {
        var positionFound = [];
        for (var i=0; i<positionToGet; i++)
            positionFound[i] = false; 
        var position;
        var amount=0;
        for (i=0; i<amountOfFallingLeaves; i++) {
        	position = fallingLeaves[i];
        	if (!positionFound[position-1]) {
            	positionFound[position-1] = true; // This could also be inside for loop, but it will not count
            	amount++;
            	if (amount==positionToGet) {
            		earliestTimeToJump = i;
            	    break;
            	}
        	} 
        }
    }
    return earliestTimeToJump;
}

// 100% correctness, 66% performance
function solution(positionToGet, fallingLeaves) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var earliestTimeToJump = positionToGet - 1;
    var lowestTimeForPosition;
    if (positionToGet > fallingLeaves.length)
        earliestTimeToJump = -1;
    else {
        for (var i=1; i<=positionToGet; i++) {
            lowestTimeForPosition = fallingLeaves.indexOf(i);
            if (lowestTimeForPosition == -1) {
                earliestTimeToJump = -1;
                break;
            }
            else if (lowestTimeForPosition > earliestTimeToJump) {
                earliestTimeToJump = lowestTimeForPosition;
            }
        }
    }
    return earliestTimeToJump;
}

// 100% correctness, 50% performance
function solution(X, A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var earliestTimeToJump = -1;
    var amountOfFallingLeaves = A.length;
    var foundSquares = [];
    if (X<=amountOfFallingLeaves) {
        for (var i=0; i<=amountOfFallingLeaves; i++) {
            currentLeave = A[i];
            if (currentLeave<=X && foundSquares.indexOf(currentLeave)==-1) {
                foundSquares.push(currentLeave);
                if (foundSquares.length == X) {
                    earliestTimeToJump = i;
                    break;
                }
            }
        }  
    }
    return earliestTimeToJump;
}









