var isGreater = function(totalCandies, candies, i){
    let assumption = true;

    for(let index=0; index<candies.length; index++){
        if(i != index){
            if(totalCandies < candies[index]){
                assumption = false;
            }
        }
    }

    return assumption;
}

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // initialize an empty array <- result
    let result = [];

    // loop through the candies array i = 0 to n-1, n => candies.length
    for(let i=0; i<candies.length; i++){
        // for every candy candies[i]
        // find the totalCandies = candies[i] + extraCandies
        let totalCandies = candies[i] + extraCandies;

        // check if the totalCandies is greater than all the other kids candies
        if(isGreater(totalCandies, candies, i)){
            // if true => push true to the result array
            result.push(true);
        } else {
            // else => push false to the result array
            result.push(false);
        }
    }
    
    // return the result array
    return result;
};

/*
    1. Problem Understanding

    2. Problem Understanding - Validation

    3. Algorithm

        // initialize an empty array <- result

        // loop through the candies array i = 0 to n-1, n => candies.length

            // for every candy candies[i]
            // find the totalCandies = candies[i] + extraCandies

            // check if the totalCandies is greater than all the other kids candies

                // if true => push true to the result array

                // else => push false to the result array
        
        // return the result array
*/