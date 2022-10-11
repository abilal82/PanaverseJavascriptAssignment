/**
 * Author: Bilal Aslam
 * Date : 9 October 2022.
 *
 * NOTE: suffix of variable name   => _{digit} will be represented problem number. e.g name_1, name_2.
 */

const output_specifier = "%c";

/**
 * Problem: 38
 *
 * Cities: Write a function called describe_city() that accepts the name of a city and its country.
 * The function should print a simple sentence, such as Karachi is in Pakistan.
 * Give the parameter for the country a default value. 
 * Call your function for three different cities, at least one of which is not in the default country.
 * 
 */

 console.log("%cProblem 38", styles);
 
 
 
 function describe_city(city, country = 'Pakistan') {
   console.log(` ${city} is in ${country} `)  
}

describe_city('Lahore',"Pakistan");
describe_city('Karachi');
describe_city('Kabul','Afghanistan');




/**
 * Problem: 39
 *
 * City Names: Write a function called city_country() that takes in the name of a city and its country.
 *  The function should return a string formatted like this:"Lahore, Pakistan"
 * Call your function with at least three city-country pairs, and print the value that’s returned.
 * 
 */

 console.log("%cProblem 39", styles);
 
 function city_country(city, country = 'Pakistan') {
  return ` ${city} , ${country} `;
}
 

console.log(city_country('Faislabad','Pakistan'))
console.log(city_country('Helsinki','Finland'))
console.log(city_country('Afghanistan','Kabul'))


