/**
 * Author: Bilal Aslam
 * Date : 9 October 2022.
 *
 * NOTE: suffix of variable name   => _{digit} will be represented problem number. e.g name_1, name_2.
 */

const output_specifier = "%c";

/**
 * Problem: 40
 *
 * Album: Write a function called make_album() that builds a Object describing a music album.
 * The function should take in an artist name and an album title,
 * and it should return a Object containing these two pieces of information.
 * Use the function to make three dictionaries representing different albums.
 * Print each return value to show that Objects are storing the album information correctly.
 * Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
 * If the calling line includes a value for the number of tracks, add that value to the album’s Object.
 * Make at least one new function call that includes the number of tracks on an album.
 *
 */

console.log("%cProblem 40", styles);

function make_album(artist_name, artist_title, tracks) {
  let obj = { artistName: artist_name, artistTitle: artist_title };
  if (tracks !== undefined) obj["tracks"] = tracks;

  return obj;
}

console.log(make_album("bilal", "abc"));
console.log(make_album("aslam", "xyz"));
console.log(make_album("bilal", "nmp", 10));

/**
 * Problem: 41
 *
 * Magicians: Make a array of magician’s names.
 * Pass the array to a function called show_magicians(),
 * which prints the name of each magician in the array.
 *
 */

console.log("%cProblem 41", styles);

let magicians = ["bilal", "asad", "ali"];

function show_magicians(array) {
  array.forEach((m) => console.log(m));
}

show_magicians(magicians);

/**
 * Problem: 42
 *
 * Great Magicians: Start with a copy of your program from Exercise 39.
 * Write a function called make_great() that modifies the array of magicians by adding the phrase
 * the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
 *
 */

console.log("%cProblem 42", styles);

let magicians_42 = [...magicians];
make_great(magicians_42);

function make_great(array) {
  array.forEach((m) => console.log("The Great Magician " + m));
}

show_magicians(magicians);

/**
 * Problem: 43
 *
 * Unchanged Magicians: Start with your work from Exercise 41.
 * Call the function make_great() with a copy of the array of magicians’ names.
 * Because the original array will be unchanged, return the new array and store it in a separate array.
 * Call show_magicians() with each array to show that you have one array of the
 * original names and one array with the Great added to each magician’s name.
 *
 */

console.log("%cProblem 43", styles);

function make_great_43(array) {
  let mag = [];
  array.forEach((m) => mag.push("The Great Magician " + m));
  return mag;
}

// Call the function make_great() with a copy of the array of magicians’ names.

const mags = make_great_43([...magicians]);

console.log(show_magicians(magicians));
console.log(show_magicians(mags));
