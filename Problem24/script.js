/**
 * Author: Bilal Aslam
 * Date : 9 October 2022.
 * 
 * NOTE: suffix of variable name   => _{digit} will be represented problem number. e.g name_1, name_2.
 */

 const output_specifier = '%c';

/**
 * Problem: 24
 * 
 * More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 * If you want to try more comparisons, write more tests. 
 * Have at least one True and one False result for each of the following:
 * Tests for equality and inequality with strings - done
 * Tests using the lower case function  done
 * Numerical tests involving equality and inequality, greater than and less than, 
 * greater than or equal to, and less than or equal to
 * Tests using "and" and "or" operators
 * Test whether an item is in a array
 * Test whether an item is not in a array
 */


console.log('%cProblem 24 ',styles);

let countryName = 'Pakistan';
let country = 'Norway';
let price = 10.5;
let total_amount = 100.0;
let numbers = [2,10,11,28,99];


// Tests using the lower case function
console.log(`${output_specifier} TEST 1 - Orignal Value of countryName : ${countryName} `,original)

console.log("Is countryName.toLowerCase() === 'pakistan'? I predict True.")
console.log(countryName.toLowerCase() === 'pakistan')

// Tests for equality and inequality with strings

console.log(`${output_specifier} TEST 2 - Orignal Value of countryName : ${country} `,original)

console.log("Is country === 'NOrway'? I predict False.")
console.log(country === 'NOrway')

console.log("Is country !== 'NOrway'? I predict True.")
console.log(country !== 'NOrway')


// Numerical tests involving equality and inequality, greater than and less than, 


console.log("Is  price === 10.5 ? I predict True.")
console.log(price === 10.5)

console.log("Is  price === 11 ? I predict False.")
console.log(price === 11)


// greater than and less than, greater than or equal to, and less than or equal to

console.log(`${output_specifier} TEST 3 - Orignal Value of Price : ${price} `,original)


console.log("Is  price > 10 && price < 11 ? I predict True.")
console.log(price > 10 && price < 11)

console.log("Is  price >= 10 && price <= 11 ? I predict True.")
console.log(price >= 10 && price <= 11)


// Tests using "and" and "or" operators => && operator has been used in above Tests;
console.log(`${output_specifier} TEST 4 - Orignal Value of total_amount : ${total_amount} `,original)

console.log("Is  total_amount >= 100 or total_amount <= 110 ? I predict True.")
console.log(total_amount >= 100 || total_amount <= 110)




//  Test whether an item is in a array
//  Test whether an item is not in a array

console.log(`${output_specifier} TEST 5 - Orignal Values of numbers array : ${numbers} `,original)


console.log("Is numbers.includes(20) ? I predict False.")
console.log(numbers.includes(20))

console.log("Is numbers.includes(11) ? I predict True.")
console.log(numbers.includes(11))
