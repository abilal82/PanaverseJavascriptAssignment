/**
 * Author: Bilal Aslam
 * Date : 9 October 2022.
 * 
 * NOTE: suffix of variable name   => _{digit} will be represented problem number. e.g name_1, name_2.
 */



 const output_specifier = '%c';
 
 /**
  * Problem: 19
  * 
  * Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
  * print a message indicating the number of people you are inviting to dinner.
  */
 
 // From Exercise 14
 
 console.log('%cProblem 19 ',styles);
 
 let invites_14 = ['Asad', 'umair', 'Abu Bakar'];
 
 console.log(`Total ${invites_14.length} Guest Are Comming To Dinner`);
 
 /**
  * Problem: 20
  * 
  * Think of something you could store in a array. For example, 
  * you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
  * Write a program that creates a list containing these items.
  */
  console.log('%cProblem 20 ',styles);
 
 const countries = [];
 let noOfCountries= prompt("Enter Number of Countries, You want Enter ");
 
 let country;
 for(let i = 0; i <= noOfCountries;i++) {
     country = prompt("Enter Countries Name");
     countries.push(country);
    }
    
    console.log(`Countries : ${countries}`);
    
  
