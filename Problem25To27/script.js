/**
 * Author: Bilal Aslam
 * Date : 9 October 2022.
 *
 * NOTE: suffix of variable name   => _{digit} will be represented problem number. e.g name_1, name_2.
 *
 */

const output_specifier = "%c";

/**
 * Problem: 25
 *
 * Alien Colors #1: Imagine an alien was just shot down in a game.
 * Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
 * Write an if statement to test whether the alien’s color is green.
 * If it is, print a message that the player just earned 5 points.
 * Write one version of this program that passes the if test and another that fails.
 * (The version that fails will have no output.)
 *
 */

console.log("%cProblem 25 ", styles);

let alien_color = "green";

if (alien_color === "green") console.log(`The player earned 5 points `);

console.log("Is alien_color === 'green' ? I predict True.");
console.log(alien_color === "green");

/**
 * Problem: 26
 *
 * Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
 * If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
 * If the alien’s color isn’t green, print a statement that the player just earned 10 points.
 * Write one version of this program that runs the if block and another that runs the else block.
 *
 */
 console.log("%cProblem 26 ", styles);

if (alien_color === "green") console.log(`The player earned 5 points `);
if (alien_color !== "green") console.log(`The player earned 10 points `);

console.log(
  `${output_specifier}if-else Version of above program`,
  msge_Important
);

if (alien_color === "green") console.log(`The player earned 5 points `);
else console.log(`The player earned 10 points `);

/**
 * Problem: 27
 *
 * Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
 * If the alien is green, print a message that the player earned 5 points.
 * If the alien is yellow, print a message that the player earned 10 points.
 * If the alien is red, print a message that the player earned 15 points.
 *
 */
 console.log("%cProblem 27 ", styles);


if (alien_color === "green") console.log(`Color is Green, The player earned 5 points `);
else if (alien_color === "yellow") console.log(`Color is Yellow, The player earned 10 points `);
else if (alien_color === "red") console.log(`Color is Red, The player earned 15 points `);

alien_color = 'red';

if (alien_color === "green") console.log(`Color is Green, The player earned 5 points `);
else if (alien_color === "yellow") console.log(`Color is Yellow, The player earned 10 points `);
else if (alien_color === "red") console.log(`Color is Red, The player earned 15 points `);

alien_color = "yellow";


if (alien_color === "green") console.log(`Color is Green, The player earned 5 points `);
else if (alien_color === "yellow") console.log(`Color is Yellow, The player earned 10 points `);
else if (alien_color === "red") console.log(`Color is Red, The player earned 15 points `);