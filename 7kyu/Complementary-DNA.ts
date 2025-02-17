// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); 
// you need to return the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

//My Solution:

export class Kata {
    static dnaStrand(dna: string) {
      //your code here
      const pairs: Record<string, string> = { 'A': 'T', 'T': 'A','C':'G','G':'C'};
      return dna.split('').map(letter => pairs[letter]).join('');     
      }
  }