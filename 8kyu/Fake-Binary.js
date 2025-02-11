// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//My Solution:

function fakeBin(x){
    const array = x.split('')
    const newArray = array.map(i => i < 5 ? i = 0 : i = 1)
    return newArray.join('');
   }