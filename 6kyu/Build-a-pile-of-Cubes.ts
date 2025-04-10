// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

// My Solution:

export function findNb(m: number): number {
  let n = 0;
  let total = 0;

  while (total < m) {
    n++;
    total += Math.pow(n, 3);
  }

  return total === m ? n : -1;
}
