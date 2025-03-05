// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

//My Solution:

export function isIsogram(str: string): boolean{
    let newString = str.toLowerCase()
    
    if (!newString) {
      return true;
    }
    return !newString.split('').some((char, index) => newString.indexOf(char) !== index);
  }