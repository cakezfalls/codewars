// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0. Your function only needs to return the result, 
// what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

//My Solution:

export const summation = (num:number)=> { 
    let sum:number = 0;
                  
    for (let n:number = 0; n < num; n++) {
      sum += n + 1;
    }
    return sum;
  }