// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

//My solution:

export function sumArray(array:number[] | null) : number {
    if (!array || array.length === 0) {
    return 0;  
  }
    const maxi:number = Math.max(...array)
    const mini:number = Math.min(...array)
  
    const maxiIndex:number = array.indexOf(maxi)
    array.splice(maxiIndex, 1)
    
    const miniIndex:number = array.indexOf(mini)
    array.splice(miniIndex, 1)
    
    let sum:number = array.reduce((sum:number, i:number) => sum += i, 0)
    
    return sum;
  }