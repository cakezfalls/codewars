// Complete the function that takes two integers (a, b, where a < b) and 
// return an array of all integers between the input parameters, including them.

//My Solution:

export function between(a: number, b: number): number[] {
    const arrayNumbers: number[] = [];
    
    for (let i = a; i <= b; i++) {
        arrayNumbers.push(i)
    }
    return arrayNumbers;
  }