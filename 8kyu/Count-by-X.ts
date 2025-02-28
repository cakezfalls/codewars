// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

//My Solutions:

export function countBy(x: number, n: number): number[] {
    const arrayNumbers:number[] = [];
    let numbers:number = x;
    for (let i = 0; i < n; i++) {
        arrayNumbers.push(numbers);   
        numbers += x;
    }
    return arrayNumbers;
  }