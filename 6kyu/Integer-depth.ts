// The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits have appeared at least once in some multiple.

//My Solution:

export function computeDepth(n: number): number {
  const digitsSeen = new Set<string>();
  let multiplier = 1;

  while (digitsSeen.size < 10) {
    const current = (n * multiplier).toString();
    for (const digit of current) {
      digitsSeen.add(digit);
    }
    multiplier++;
  }

  return multiplier - 1;
}
