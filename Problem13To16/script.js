/**
 * Author: Bilal Aslam
 * Date : 9 October 2022.
 * 
 * NOTE: suffix of variable name   => _number will be represented problem number. e.g name_1, name_2 in below problems.
 */


// Styles is used in console.log() as a second parameter to style output,to seperate every problem's output in the console.
 const styles = [
  'color: white',
  'background:dodgerblue ',
  'font-size: 20px',
  'border: 1px solid blue',
  'padding: 10px',
].join(';'); 




 /**
 * Problem: 13. 
 * Your Own Array: Think of your favorite mode of transportation, 
 * such as a motorcycle or a car, and make a list that stores several examples. 
 * Use your list to print a series of statements about these items,
 * such as “I would like to own a Honda motorcycle.”
 */
 console.log('%cproblem 13 ',styles);

let transportations = ['motorcycle','bicycle','AirBus','Car', 'truck','rickshaw'];

for(let  trans of transportations)
console.log(`“I would like to own a ${trans}.”`)






 /**
 * Problem: 14. 
 * Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 *  Make a list that includes at least three people you’d like to invite to dinner. 
 * Then use your list to print a message to each person, inviting them to dinner.
 */

console.log('%cProblem 14 ',styles);

let invites_14 = ['Asad', 'umair', 'Abu Bakar'];
for(let invite of invites_14)
console.log(`${invite}, You are invited at dinner party`);





 /**
 * Problem: 15. 
 * 
 * Changing Guest List: You just heard that one of your guests can’t make the dinner, 
 * so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
 * Start with your program from Exercise 14.
 * Add a print statement at the end of your program stating the name of the guest who can’t make it.
 * Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
 * Print a second set of invitation messages, one for each person who is still in your list.
 */
 
console.log('%cProblem 15 ',styles);


let invites_15 = ['Asad', 'umair', 'Abu Bakar'];

for(let invite of invites_15)
console.log(`${invite}, You are invited at dinner party`);

console.log(`%c ${invites_15[1]}, Wouldn't be able to come at Dinner`,'color: tomato;');


invites_15.splice(1,1,"bilal");


for(let invite of invites_15)
console.log(`${invite}, You are invited at dinner party`);




 /**
 * Problem: 16.
 * 
 * More Guests: You just found a bigger dinner table, so now more space is available. 
 * Think of three more guests to invite to dinner.
 * Start with your program from Exercise 15.
 * Add a print statement to the end of your program informing people that you found a bigger dinner table.
 * Add one new guest to the beginning of your array. Add one new guest to the middle of your array.
 * Use append() to add one new guest to the end of your list.
 * Print a new set of invitation messages, one for each person in your list.
 * 
 */


  console.log('%cProblem 16 ',styles);


  let invites_16 = ['Asad', 'Umair', 'Abu Bakar'];
  
  for(let invite of invites_16)
  console.log(`${invite}, You are invited at dinner party`);
  
  console.log(`%c ${invites_16[1]}, Wouldn't be able to come at Dinner`,'color: tomato;');
  
  
  invites_16.splice(1,1,"Bilal");
  
  
  for(let invite of invites_16)
  console.log(`${invite}, You are invited at dinner party`);

  console.log(`%cCongratulations ! More people to join at dinner, We'll have bigger dinner table now.`,'color:darkred;');

  // In the begining.
  invites_16.unshift('Talal');
  // In the middle.
  invites_16.splice(2,0,"Talha");
  // In the End.
  invites_16.push("Ali");

  for(let invite of invites_16)
  console.log(`${invite}, You are invited at dinner party`);



