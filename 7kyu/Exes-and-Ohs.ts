// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

//My Solution:

export function xo(str: string) : boolean {
    const stringX = str.toLowerCase().split('').filter (i => i ==='x').join('')
    const stringY = str.toLowerCase().split('').filter (i => i == 'o').join('')
    return stringX.length === stringY.length;
  }

