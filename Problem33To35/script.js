/**
 * Author: Bilal Aslam
 * Date : 9 October 2022.
 *
 * 
 */

const output_specifier = "%c";


 
 /**
  * Problem: 33
  *
  * Ordinal Numbers: Ordinal numbers indicate their position in a array, 
  * such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
  * Store the numbers 1 through 9 in a array.
  * Loop through the array.
  * Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
  * Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
  */
 
  console.log("%cProblem 33 ", styles);
 
 
 let numbers = [1,2,3,4,5,6,7,8,9];
 for(let num of numbers)
  if(num == 1) console.log('1st');
  else if(num == 2) console.log('2nd');
  else if(num == 3) console.log('3rd');
  else console.log(num+'th')

 /**
  * Problem: 34
  * Pizzas: Think of at least three kinds of your favorite pizza.
  * Store these pizza names in a array, and then use a for loop to print the name of each pizza.
  * Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
  * For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
  * Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
  * The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
  * such as I really love pizza!
  */
 
  console.log("%cProblem 34 ", styles);
  
  let favorite_pizzas = ['pepperoni', 'fajita', 'tikka'];
  
  favorite_pizzas.forEach(value => console.log(value));
  
  
  // Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
  
  
  favorite_pizzas.forEach(value => console.log(`I really love ${value} pizza`));
  
  console.log(`I really love pizzas!`)

  /**
  * Problem: 35
  * Animals: Think of at least three different animals that have a common characteristic.
  * Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
  * Modify your program to print a statement about each animal, such as A dog would make a great pet.
  * Add a line at the end of your program stating what these animals have in common. 
  * You could print a sentence such as Any of these animals would make a great pet!
  * 
  */
  
   console.log("%cProblem 35 ", styles);


   let best_pets = ['dog', 'cat', 'goat'];

   best_pets.forEach(value => console.log(value));
   best_pets.forEach(value => console.log(`A ${value} would be a great pet `));
   console.log(`All these pets are intelligent and loyal`)














