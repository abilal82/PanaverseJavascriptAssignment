/**
 * Author: Bilal Aslam
 * Date : 9 October 2022.
 * 
 * NOTE: suffix of variable name   => _{digit} will be represented problem number. e.g name_1, name_2.
 */



 const output_specifier = '%c';

 
  /**
     * Problem: 22
     * 
     * Intentional Error: If you haven’t received an array index error in one of your programs yet,
     * try to make one happen. 
     * Change an index in one of your programs to produce an index error.
     * Make sure you correct the error before closing the program.
     * 
     */
   console.log('%cProblem 22 ',styles);


   const transports = new Array(2);
   transports[0] =  'motorcycle';
   transports[1] = 'bicycle';

   console.log(transports.findIndex(2))
   console.log(transports.findIndex('bicycle'))



   