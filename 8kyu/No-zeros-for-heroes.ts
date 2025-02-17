// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

//My Solution:

export function noBoringZeros(n: number): number {  
    if (n === 0) {
      return 0;
    } else {
      return Number(String(n).replace (/0+$/, ' '));
    };
  };
