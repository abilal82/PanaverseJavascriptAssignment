/**
 * Author: Bilal Aslam
 * Date : 9 October 2022.
 * 
 * NOTE: suffix of variable name   => _{digit} will be represented problem number. e.g name_1, name_2.
 */

 const output_specifier = '%c';

/**
 * Problem: 29
 * 
 * Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
 * if statements that check for certain fruits in your array.
 * Make a array of your three favorite fruits and call it favorite_fruits.
 * Write five if statements. Each should check whether a certain kind of fruit is in your array.
 * If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 * 
 */


console.log('%cProblem 29 ',styles);

const favorite_fruits = ['orange','apple','mongo'];

if(favorite_fruits.includes('peach')) console.log("You really like Peach")
if(favorite_fruits.includes('apple')) console.log("You really like Apple")
if(favorite_fruits.includes('alichi')) console.log("You really like Alichi")
if(favorite_fruits.includes('orange')) console.log("You really like Orange")






