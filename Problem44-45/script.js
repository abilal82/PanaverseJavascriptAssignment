/**
 * Author: Bilal Aslam
 * Date : 9 October 2022.
 *
 * NOTE: suffix of variable name   => _{digit} will be represented problem number. e.g name_1, name_2.
 */

const output_specifier = "%c";

/**
 * Problem: 44
 *
 * Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 * The function should have one parameter that collects as many items as the function call provides,
 * and it should print a summary of the sandwich that is being ordered.
 * Call the function three times, using a different number of arguments each time.
 *
 */

console.log("%cProblem 44", styles);

sandwichMaker("BBQ Source", "cheeze");
sandwichMaker("Thousand Island Source", "Chadder", "Grilled");
sandwichMaker("mustard Source", "Chadder", "Olives", "onion");

function sandwichMaker(...items) {
  console.log("Your Sandwitch will be ready in 10 mins");
  for (let item of items) console.log("added " + item);
}

/**
 * Problem: 45
 *
 * Cars: Write a function that stores information about a car in a Object.
 * The function should always receive a manufacturer and a model name.
 * It should then accept an arbitrary number of keyword arguments.
 * Call the function with the required information and two other name-value pairs,
 * such as a color or an optional feature.
 * Print the Object that’s returned to make sure all the information was stored correctly.
 *
 */


// We need to passs objects in optional parameter so that we can acces key and its value and inject them into object.


console.log(car("Honda", "GLI", { color: "Red" , year: "2012" }));

function car(manufacturer, model, items) {
  let obj = { Manufacturer: manufacturer, ModelName: model };

  if (items === undefined) return obj;
  else 
      for (let key in items) 
        obj[key] = items[key];

  return obj;
}
