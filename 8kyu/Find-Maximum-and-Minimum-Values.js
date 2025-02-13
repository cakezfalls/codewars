// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
// that receive a list of integers as input, and return the largest and lowest number in that list, respectively. 
// Each function returns one number.

//My Solution:

var min = function(list){
    const mini = Math.min(...list);
    return mini;
}

var max = function(list){
    const maxi = Math.max (...list);
    return maxi;
}