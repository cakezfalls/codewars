// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). 
// The next words should be always capitalized.

//My Solution:

export function toCamelCase(str:string):string{
  
    
    const newArray = str.split(/[-_]/);
    return newArray.map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('')
} 