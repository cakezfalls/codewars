// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

//My Solution:

export function getMiddle(s:string) {
  
    if (s.length % 2 === 0) {
      return s.slice (s.length / 2 - 1, s.length / 2 + 1)
    } else {
      return s.slice(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1);
    }
  }