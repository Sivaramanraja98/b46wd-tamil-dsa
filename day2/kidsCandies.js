// // Time Complexity: O(N^2)
// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;

//     for(let index=0; index<candies.length; index++){
//         if(i != index){
//             if(totalCandies < candies[index]){
//                 assumption = false;
//             }
//         }
//     }

//     return assumption;
// }

// /**
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */
// var kidsWithCandies = function(candies, extraCandies) {
//     // initialize an empty array <- result
//     let result = [];

//     // loop through the candies array i = 0 to n-1, n => candies.length
//     for(let i=0; i<candies.length; i++){
//         // for every candy candies[i]
//         // find the totalCandies = candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is greater than all the other kids candies
//         if(isGreater(totalCandies, candies, i)){
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else => push false to the result array
//             result.push(false);
//         }
//     }
    
//     // return the result array
//     return result;
// };

// // Time Complexity: O(N^2)
// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;

//     for(let index=0; index<candies.length; index++){
//         if(i != index){
//             if(totalCandies < candies[index]){
//                 assumption = false;
//                 break;
//             }
//         }
//     }

//     return assumption;
// }

// /**
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */
// var kidsWithCandies = function(candies, extraCandies) {
//     // initialize an empty array <- result
//     let result = [];

//     // loop through the candies array i = 0 to n-1, n => candies.length
//     for(let i=0; i<candies.length; i++){
//         // for every candy candies[i]
//         // find the totalCandies = candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is greater than all the other kids candies
//         if(isGreater(totalCandies, candies, i)){
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else => push false to the result array
//             result.push(false);
//         }
//     }
    
//     // return the result array
//     return result;
// };


// Time Complexity: O(N^2)
// var isGreater = function(totalCandies, candies, i){
//     for(let index=0; index<candies.length; index++){
//         if(i != index){
//             if(totalCandies < candies[index]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }


// Time Complexity: O(N^2)
// var isGreater = function(totalCandies, candies, i){
//     for(let index=0; index<candies.length; index++){
//         if(totalCandies < candies[index]){
//             return false;
//         }
//     }
//     return true;
// }

// /**
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */
// var kidsWithCandies = function(candies, extraCandies) {
//     // initialize an empty array <- result
//     let result = [];

//     // loop through the candies array i = 0 to n-1, n => candies.length
//     for(let i=0; i<candies.length; i++){
//         // for every candy candies[i]
//         // find the totalCandies = candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is greater than all the other kids candies
//         if(isGreater(totalCandies, candies, i)){
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else => push false to the result array
//             result.push(false);
//         }
//     }
    
//     // return the result array
//     return result;
// };

// var isGreater = function(totalCandies, candies, i){
//     for(let index=0; index<candies.length; index++){
//         if(totalCandies < candies[index]){
//             return false;
//         }
//     }
//     return true;
// }

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

// Time Complexity: O(N) 
// var kidsWithCandies = function(candies, extraCandies) {
//     // initialize an empty array <- result
//     let result = [];

//     // using library function
//     let greatestCandy = Math.max(...candies);

//     // loop through the candies array i = 0 to n-1, n => candies.length
//     for(let i=0; i<candies.length; i++){
//         // for every candy candies[i]
//         // find the totalCandies = candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is greater than all the other kids candies
//         if(totalCandies >= greatestCandy){
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else => push false to the result array
//             result.push(false);
//         }
//     }
    
//     // return the result array
//     return result;
// };

// O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     for(let i=0; i<candies.length; i++){
//         let greatestCandy = Math.max(...candies);
//         let totalCandies = candies[i] + extraCandies;
//         if(totalCandies >= greatestCandy){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         result.push(totalCandies >= greatestCandy);
//     }
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         result.push(candies[i] + extraCandies >= greatestCandy);
//     }
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     result = candies.map((candy) => {
//         return candy + extraCandies >= greatestCandy;
//     });
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map((candy) => {
//         return candy + extraCandies >= greatestCandy;
//     });
// };

// O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => candy + extraCandies >= greatestCandy);
// };

// O(N^2)
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(candy => candy + extraCandies >= Math.max(...candies));
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