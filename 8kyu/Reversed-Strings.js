// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//My Solution:

function solution(str){
    const array = str.split('');
    return array.reverse().join('')
  }