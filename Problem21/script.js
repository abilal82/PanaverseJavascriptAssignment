/**
 * Author: Bilal Aslam
 * Date : 9 October 2022.
 * 
 * NOTE: suffix of variable name   => _{digit} will be represented problem number. e.g name_1, name_2.
 */



 const output_specifier = '%c';

 
  /**
     * Problem: 21
     * 
     * They think of something you could store in a JavaScript Object.
     * Write a program that creates Objects containing these items.
     * 
     */
   console.log('%cProblem 21 ',styles);


   const student = { Name: "", Age: 0, rollNo: '' };
  

   student.Name = prompt("Enter student name  ");
   student.Age = prompt("Enter student Age  ");
   student.rollNo = prompt("Enter student Roll No  ");

   console.log(student);
