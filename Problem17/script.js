/**
 * Author: Bilal Aslam
 * Date : 9 October 2022.
 * 
 * NOTE: suffix of variable name   => _{digit} will be represented problem number. e.g name_1, name_2.
 */



const output_specifier = '%c';
/**
 * Problem: 17
 * Shrinking Guest List: 
 * You just found out that your new dinner table won’t arrive in time for the dinner,and you have space for only two guests.
 * Start with your program from Exercise 16. 
 * Add a new line that prints a message saying that you can invite only two people for dinner.
 * Remove guests from your list one at a time until only two names remain in your list.
 * Each time you pop a name from your list, print a message to that person letting them know
 *  you’re sorry you can’t invite them to dinner.
 * Print a message to each of the two people still on your list, letting them know they’re still invited.
 * Remove the last two names from your list, so you have an empty list.
 * Print your list to make sure you actually have an empty list at the end of your program.
 */


  console.log('${output_specifier}Problem 17 ',styles);


  let invites_17 = ['Asad', 'Umair', 'Abu Bakar'];
  
  for(let invite of invites_17)
  console.log(`${invite}, You are invited at dinner party`);
  
  console.log(`${output_specifier} ${invites_17[1]}, Wouldn't be able to come at Dinner`,msge_Important);
  
  
  invites_17.splice(1,1,"Bilal");
  
  
  for(let invite of invites_17)
  console.log(`${invite}, You are invited at dinner party`);

  console.log(`${output_specifier}Congratulations ! More people to join at dinner, We'll have bigger dinner table now.`,msge_info);

  // In the begining.
  invites_17.unshift('Talal');
  // In the middle.
  invites_17.splice(2,0,"Talha");
  // In the End.
  invites_17.push("Ali");

  for(let invite of invites_17)
  console.log(`${invite}, You are invited at dinner party`);


  console.log(`${output_specifier}ALERT ! Due to unavailability of bigger table,Only two Persons will be invited`,msge_Important);

  let IgnoredPerson = invites_17.pop();
  console.log(`${output_specifier} Im sorry ${IgnoredPerson}, I can't invite you`,msge_Important);
  
   IgnoredPerson = invites_17.pop();
  console.log(`${output_specifier} Im sorry ${IgnoredPerson}, I can't invite you`,msge_Important);
  
   IgnoredPerson = invites_17.pop();
  console.log(`${output_specifier} Im sorry ${IgnoredPerson}, I can't invite you`,msge_Important);
  
   IgnoredPerson = invites_17.pop();
  console.log(`${output_specifier} Im sorry ${IgnoredPerson}, I can't invite you`,msge_Important);

  for(let invite of invites_17)
  console.log(`${invite}, You are still invited at dinner party`);

  // Remove remiaing two person
  IgnoredPerson = invites_17.pop();
  console.log(`${output_specifier} Im sorry ${IgnoredPerson}, I can't invite you as well`,msge_Important);

  IgnoredPerson = invites_17.pop();
  console.log(`${output_specifier} Im sorry ${IgnoredPerson}, I can't invite you as well`,msge_Important);

 invites_17.length == 0 ? 
          console.log(`${output_specifier} Guest List Is Empty `,msge_Important) 
          : console.log(`${output_specifier} Still some is invited  `,msge_Important);


  
