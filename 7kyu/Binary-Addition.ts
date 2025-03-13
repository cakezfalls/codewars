// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.


//My Solution:

export function addBinary(a:number,b:number):string {
    return (a + b).toString(2)
  }