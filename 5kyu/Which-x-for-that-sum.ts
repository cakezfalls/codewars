// Consider the sequence U(n, x) = x + 2x**2 + 3x**3 + .. + nx**n where x is a real number and n a positive integer.

// When n goes to infinity and x has a correct value (ie x is in its domain of convergence D), U(n, x) goes to a finite limit m depending on x.

// Usually given x we try to find m. Here we will try to find x (x real, 0 < x < 1) when m is given (m real, m > 0).

// Let us call solve the function solve(m) which returns x such as U(n, x) goes to m when n goes to infinity.

// Examples:
// solve(2.0) returns 0.5 since U(n, 0.5) goes to 2 when n goes to infinity.

// solve(8.0) returns 0.7034648345913732 since U(n, 0.7034648345913732) goes to 8 when n goes to infinity.

//My Solution:

export function solve(m: number): number {
  let left = 0;
  let right = 1;
  let mid;

  while (right - left > 1e-12) {
    mid = (left + right) / 2;
    const value = mid / Math.pow(1 - mid, 2);

    if (value < m) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return (left + right) / 2;
}
