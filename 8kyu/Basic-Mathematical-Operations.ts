// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

//My Solution:

export function basicOp(operation: string, value1: number, value2: number): number {
    // Good luck!
    let sum:number = 0;
    if (operation === '+') {
      return sum = value1 + value2;  
    } else if (operation === '-') {
      return sum = value1 - value2;
    } else if (operation === '*') {
      return sum = value1 * value2;
    } else {
      return sum = value1 / value2;
    }