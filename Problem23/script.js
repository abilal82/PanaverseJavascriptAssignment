/**
 * Author: Bilal Aslam
 * Date : 9 October 2022.
 * 
 * NOTE: suffix of variable name   => _{digit} will be represented problem number. e.g name_1, name_2.
 */



 const output_specifier = '%c';

 
  /**
* Problem: 23
* 
* Conditional Tests: Write a series of conditional tests. Print a statement describing each test and
* your prediction for the results of each test. Your code should look something like this:
* let car = 'subaru';
* console.log("Is car == 'subaru'? I predict True.")
* console.log(car == 'subaru')
* Look closely at your results, and make sure you understand why each line evaluates to True or False.
* Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
* 
*/
   console.log('%cProblem 23 ',styles);

// Test For True 1.
let car = 'Honda';
console.log("Is car === 'Honda'? I predict True.")
console.log(car === 'Honda')

// Test For True 2.

let name;
console.log("Is name === undefine ? I predict True.")
console.log(name  === undefined)

// Test For True 3.

let cnic = '';
console.log("Is typeof cnic === 'string' ? I predict True.")
console.log((typeof cnic === 'string' ))

// Test For True 4.

let isDeleted = true;
console.log("Is type of isDeleted === 'boolean' ? I predict True.")
console.log((typeof isDeleted === 'boolean' ))

// Test For True 5.

let obj = {};
console.log("Is type of obj === 'object' ? I predict True.")
console.log((typeof obj === 'object' ))

// Test For False 1.
let countryName = 'pakistan';
console.log("Is countryName === 'Pakistan'? I predict False.")
console.log(countryName === 'Pakistan')

// Test For False 2.

let  FirstName = '';

console.log("Is FirstName === null ? I predict False.")
console.log(FirstName  === null)

// Test For False 3.

let  LastName = '';
console.log("Is LastName === undefined ? I predict False.")
console.log((typeof number === undefined ))

// Test For False 4.

let IsChecked = true;
console.log("Is IsChecked === false ? I predict False.")
console.log((IsChecked === false ))

// Test For False 5.

let studentObj = {};
console.log("Is studentObj === null  ? I predict False.")
console.log(( studentObj === null ))

