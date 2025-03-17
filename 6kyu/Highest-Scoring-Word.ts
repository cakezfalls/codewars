// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


//My Solution:

export function high(str: string): string {
    const words = str.split(" ");
    const wordScore = (word: string) => 
      word.split("").reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0);
    
    return words.reduce((bestWord, currentWord) =>
      wordScore(currentWord) > wordScore(bestWord) ? currentWord : bestWord
    );
  }