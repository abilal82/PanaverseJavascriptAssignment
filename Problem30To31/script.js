/**
 * Author: Bilal Aslam
 * Date : 9 October 2022.
 *
 * NOTE: suffix of variable name   => _{digit} will be represented problem number. e.g name_1, name_2.
 */

const output_specifier = "%c";

/**
 * Problem: 30
 *
 * Hello Admin: Make a array of five or more usernames, including the name 'admin'.
 * Imagine you are writing code that will print a greeting to each user after they log in to a website.
 * Loop through the array, and print a greeting to each user:
 * If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
 * Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
 */

console.log("%cProblem 30 ", styles);

let usernames = ["admin", "bilal", "asad", "talal", "talha"];

for (let username of usernames)
  if (username === "admin")
    console.log("Hello admin, would you like to see a status report?");
  else console.log("Hello " + username);

/**
 * Problem: 31
 *
 * No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
 * If the list is empty, print the message We need to find some users!
 * Remove all of the usernames from your array, and make sure the correct message is printed.
 */
console.log("%cProblem 31 ", styles);

usernames = [];

if (usernames.length !== 0)
  for (let username of usernames)
    if (username === "admin")
      console.log("Hello admin, would you like to see a status report?");
    else console.log("Hello " + username);
else
console.log("We need to find some users!");
