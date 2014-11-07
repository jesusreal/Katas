// Cover "Manhattan skyline" using the minimum number of rectangles

function solution(H) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var openBlocksHeight = [];
    var amountOfBlocks = 0;
    var wallLengthInMeters = H.length;
    for (i=0; i<wallLengthInMeters; i++) {
            if (i>0 && H[i]<H[i-1])
                closeBlocksWithHigherHeigth(); 
            if (H[i]>0 && !existBlockForCurrentHeight())
                addBlock();
    }
    
    function closeBlocksWithHigherHeigth () {
        while (openBlocksHeight[openBlocksHeight.length-1] > H[i])
            openBlocksHeight.pop(); 
    }
    
    function existBlockForCurrentHeight () {
        if (H[i]==openBlocksHeight[openBlocksHeight.length-1])
            return true;
        else 
            return false;
    }
    
    function addBlock() {
        openBlocksHeight.push(H[i]);          
        amountOfBlocks++;
    }
    
    return amountOfBlocks;
}