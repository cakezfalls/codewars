// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000, but fixed tests go higher.

//My Soluiton:

export function divisors(n: number) {
    let sum:number[] = [];
    for (let i = 0; i <= n; i++) {
      if (n % i === 0) {
        sum.push(i) 
      }
    }
    return sum.length
  }