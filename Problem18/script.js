/**
 * Author: Bilal Aslam
 * Date : 9 October 2022.
 * 
 * NOTE: suffix of variable name   => _{digit} will be represented problem number. e.g name_1, name_2.
 */


 const output_specifier = '%c';




/**
 * Problem: 18
 * 
 * Seeing the World: Think of at least five places in the world you’d like to visit.
 * Store the locations in a array. Make sure the array is not in alphabetical order.
 * 1. Print your array in its original order. 
 * 2. Print your array in alphabetical order without modifying the actual list. 
 * 3. Show that your array is still in its original order by printing it. 
 * 4. Print your array in reverse alphabetical order without changing the order of the original list.
 * 5. Show that your array is still in its original order by printing it again.
 * 6. Reverse the order of your list. Print the array to show that its order has changed.
 * 7. Reverse the order of your list again. Print the list to show it’s back to its original order.
 * 8. Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
 * 9. Sort to change your array so it’s stored in reverse alphabetical order. 
 * 10. Print the list to show that its order has changed.
 * 
 */

const places = ['Uzbakeistan','Finland','Turkey','Egpyt','Norway'];
const copy_places = [...places];


//1. Print an array in its original.
 console.log(`${output_specifier} Original Order :${places}`,original);

//2. Print an array in alphabetical order without modifying the actual array.
 console.log(` ${output_specifier} In  Aplhabatical Order : ${copy_places.sort()}`,modified);

 //3. Array is still in its original order.
 console.log(`${output_specifier} Original Order :${places}`,original);

 //4. Print an array in reverse alphabetical order without changing the order of the original list.
 console.log(` ${output_specifier} In Reverse Aplhabatical Order : ${copy_places.sort().reverse()}`,modified);

 //5.  array is still in its original order by printing it again.
 console.log(`${output_specifier} Original Order :${places}`,original);

// 6. Reverse the order of your orignal list. Print the array to show that its order has changed.

console.log(` ${output_specifier} Reverse of Default Order : ${places.reverse()}`,original);

// 7. Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(` ${output_specifier} Back To Its Default Order  : ${places.reverse()}`,original);

// 8. Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort();
console.log(` ${output_specifier} Original list Sorted : ${places}`,original);

// 9. Sort to change your array so it’s stored in reverse alphabetical order. 
places.reverse();
console.log(` ${output_specifier} Reversed Original List Alphabatically : ${places}`,original);

// 10. Print the list to show that its order has changed.
console.log(` ${output_specifier} Order Of Original List has changed : ${places}`,original);
