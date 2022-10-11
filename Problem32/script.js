/**
 * Author: Bilal Aslam
 * Date : 9 October 2022.
 *
 * NOTE: suffix of variable name   => _{digit} will be represented problem number. e.g name_1, name_2.
 */

const output_specifier = "%c";

/**
 * Problem: 32
 *
 * Checking Usernames: 
 * Do the following to create a program that simulates how websites ensure that everyone has a unique username.
 * Make a list of five or more usernames called current_users.
 * Make another list of five usernames called new_users.
 * Make sure one or two of the new usernames are also in the current_users list.
 * Loop through the new_users list to see if each new username has already been used.
 * If it has, print a message that the person will need to enter a new username. 
 * If a username has not been used, print a message saying that the username is available.
 * Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
 */

 console.log("%cProblem 32 ", styles);

 let current_users = ["admin", "bilal", "asad", "talal", "talha"];
 let new_users = ["admin", "Asif", "Asad",  "Imran"];

 for (let newuser of new_users)
   if(current_users.includes(newuser))
    console.log(`${newuser.toLowerCase()} is already in use, You need to enter new username.`)
  else
  console.log(`This username is availble`)

    
 
  

