// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//My Soluiton:

export class Kata {
    static getCount(str: string): number {
      const vowels:string[] = ['a', 'e', 'i', 'o', 'u'];
      return str.split('').filter (i => vowels.includes(i)).length;
      }
    }
  