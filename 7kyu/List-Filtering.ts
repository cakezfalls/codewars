// In this kata you will create a function that takes a list of non-negative integers and strings and 
// returns a new list with the strings filtered out.

//My Solution:

export function filter_list(l:Array<any>):Array<number> {
    return l.filter (i => typeof i === 'number');
  }