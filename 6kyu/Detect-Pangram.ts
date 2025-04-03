// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//My Solution:

export function isPangram(str: string): boolean {
    const alphabet = new Set<string>();
  
    for (const char of str.toLowerCase()) {
      if (char >= 'a' && char <= 'z') {
        alphabet.add(char);
      }
    }
  
    return alphabet.size === 26;
  }