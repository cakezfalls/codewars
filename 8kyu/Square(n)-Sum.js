// Complete the square sum function so that it squares each number passed into it and then sums the results together.

//My solution:

function squareSum(numbers){
    let sum = 0; 
    numbers.forEach (i => {
       sum += i ** 2;
    })
    return sum;
  }


//   UPD: TS Solution:

export function squareSum(numbers: number[]): number {
   return numbers.map(i => Math.pow(i,2)).reduce ((acc, num) => acc += num, 0);
}