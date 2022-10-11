/**
 * Author: Bilal Aslam
 * Date : 9 October 2022.
 *
 * NOTE: suffix of variable name   => _{digit} will be represented problem number. e.g name_1, name_2.
 */

const output_specifier = "%c";

/**
 * Problem: 36
 *
 * T-Shirt: 
 * Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
 * The function should print a sentence summarizing the size of the shirt and the message printed on it. 
 * Call the function.
 * 
 */

 console.log("%cProblem 36 ", styles);
 
 
 
 function make_shirt(size, message) {
   console.log(`Size is ${size}   ${message} `)
   
  }
  
  make_shirt('20','Good Decision');
  
  
  
  /**
   * Problem: 37
   *
   * Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
   * I love JavaScript. 
  *  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
   * 
   */
  
   console.log("%cProblem 37 ", styles);

     
 function make_largeShirt(size = 'large', message='I love Javascript') {
  console.log(`Size is ${size}   ${message} `)
  
 }
 
 make_largeShirt('medium','Good Decision');
 make_largeShirt('small','Small size t-shirt');

 
  

