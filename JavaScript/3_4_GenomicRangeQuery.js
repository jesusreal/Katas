// Find the minimal nucleotide from a range of sequence DNA

function solution(S, P, Q) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    var nucleotideImpact = {"A":1, "C":2, "G":3, "T":4};
    var amountOfQueries = P.length;
    //var amountOfNucleotides = nucleotideImpact.length;
    var minimalImpactFactorForQueries = [];
    var dnaSubsequenceOneNucleotide;
    var dnaSubsequence;
    var startInd;
    var endInd;
    for (var i=0; i<amountOfQueries; i++) {
        if (P[i] == Q[i]) {
            dnaSubsequenceOneNucleotide = S[P[i]];
            minimalImpactFactorForQueries.push(nucleotideImpact[dnaSubsequenceOneNucleotide]);
        }
        else {            
            startInd = P[i];
            endInd = Q[i]+1;
            dnaSubsequence = S.substring(startInd,endInd);
            for (var nucleotide in nucleotideImpact) { 
                if (dnaSubsequence.indexOf(nucleotide)!=-1) {
                    minimalImpactFactorForQueries.push(nucleotideImpact[nucleotide]);
                    break;
                }
            }
        }
    }
    return minimalImpactFactorForQueries;
}