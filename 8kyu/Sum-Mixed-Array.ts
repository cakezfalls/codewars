// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//My Solution:

export function sumMix(x: any[]): number {
    return x.map(i => Number(i)).reduce((acc:number, num:number)=>{
      return acc += num  
  },0);
  }