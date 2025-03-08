// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

//My Solution:

export function persistence(num: number): number {
    let count = 0;
    
    while (num >= 10) {
      num = Array.from(String(num),Number).reduce((acc, num) => acc *= num, 1)
      count++
    } 
    return count;
  }