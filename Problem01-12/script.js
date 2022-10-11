


/**
 * Author: Bilal Aslam
 * Date : 9 October 2022
 * NOTE: suffix of variable name   => _number will be represented problem number. e.g name_1, name_2 in below problems.
 */


/**
 * Problem: 2. Personal Message: Store a person’s name in a variable, and print a message to that person. 
 *             Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”.
 */


 console.log("%cProblem 02", styles);

let name_1 = 'bilal';
console.log(`Hello ${name_1}, would you like to learn some Javascript today?`);



/**
 * Problem: 3. 
 * Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
 * 
 */

 console.log("%cProblem 03", styles);

 let name_2 = 'AsLaM';
 console.log(`Lowercase:  ${name_2.toLowerCase()}
              Uppercase: ${name_2.toUpperCase()} 
              Titlecase: ${name_2.charAt(0).toUpperCase() + name_2.substring(1).toLowerCase(0)}`);
 
 
 /**
 * Problem: 4. 
 * 
 * Famous Quote: Find a quote from a famous person you admire. 
 * Print the quote and the name of its author.
 * Your output should look something like the following, including the quotation marks:
 */

  console.log("%cProblem 04", styles);


 let name_3 = 'Rumi';
 console.log(` ${name_3} once said, “Yesterday I was clever, so I wanted to change the world. Today, I am wise so I am changing myself.”`);

 /**
 * Problem: 5.
 *  
 * Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
 * Then compose your message and store it in a new variable called message. 
 * Print your message.
 * 
 */
  console.log("%cProblem 05", styles);

let famous_person = 'Rumi', message = ` ${famous_person} once said, “Yesterday I was clever, so I wanted to change the world. Today, I am wise so I am changing myself.”`;
 console.log(message);


  /**
 * Problem: 6. 
 * 
 * Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
 * Make sure you use each character combination, "\t" and "\n", at least once. 
 * Print the name once,so the whitespace around the name is displayed. 
 * Then print the name after striping the white spaces.
 */

 console.log("%cProblem 6", styles);


let person_name = '\t\tBilal\t\t\n';
console.log(person_name);
console.log(person_name.trim());

  /**
 * Problem: 7 And 8 in one go . 
 * 
 * Number Eight:
 * Write addition, subtraction, multiplication, and division operations that each result in the number 8.
 * Be sure to enclose your operations in print statements to see the results.
 *
 * You should create four lines that look like this:
 * console.log(5 + 3)
 * Your output should simply be four lines with the number 8 appearing once on each line.
 */

   console.log("%cProblem 07", styles);

console.log(' 4 + 4 : '+ (4+4));
console.log(' 4 * 2 : '+ (4*2));
console.log('10 - 2 : '+ (10-2));
console.log('16 / 2 : '+ (16/2));


/**
* Problem: 9. 
* 
*  Favorite Number: Store your favorite number in a variable. 
*  Then, using that variable, create a message that reveals your favorite number.
*  Print that message.
*/

console.log("%cProblem 09", styles);


let favorite_number = 12;
console.log(` My favorite Number is ${favorite_number}`);



/**
* Problem: 10. 
* 
* Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
* If you don’t have anything specific to write because your programs are too simple at this point, 
* just add your name and the current date at the top of each program file.
* Then write one sentence describing what the program does.
*/



// Answer 10: 
//        I have already put problem statement on the above of the all soutions
//        in order to make it easy for the person who will check this assignment and for my convenient as well.






/**
* Problem: 11. 
* Names: Store the names of a few of your friends in a array called names. 
*       Print each person’s name by accessing each element in the list, one at a time.
*/

console.log("%cProblem 11", styles);

const names = ['Bilal', 'Aslam', 'Asad'];


console.log(names[0]);
console.log(names[1]);
console.log(names[2]);




/**
* Problem: 12. 
* Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
*            The text of each message should be the same, but each message should be personalized with the person’s name.
*/

console.log("%cProblem 12", styles);

for (let element of names)
console.log(`Assalam O Alaikum  ${element}`);


