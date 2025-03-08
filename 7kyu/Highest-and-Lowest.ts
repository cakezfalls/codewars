// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.


//My Solution:

export class Kata {
    static highAndLow(numbers: string): string {
      const newArray = numbers.split(' ').map(Number).sort((a,b) => b - a);
      const max = newArray[0]
      const min = newArray[newArray.length-1]
      return max.toString() + ' ' + min.toString()
    }
  }

  //UPD:

  export class Kata {
    static highAndLow(numbers: string): string {
    const num = numbers.split(' ').map(Number);
    const max = Math.max(...num);
    const min = Math.min(...num);
      
    return `${max} ${min}`  
    }
  }