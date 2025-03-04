// Complete the function so that it finds the average of the three scores passed to it and 
// returns the letter value associated with that grade.

//My Solution:

export function getGrade(a: number, b: number, c: number): string {
    const grade = ((a + b + c) / 3);
    
    return grade >= 90 && grade <= 100 ? 'A' :
            grade >= 80 && grade < 90 ? 'B' :
            grade >= 70 && grade < 80 ? 'C' :
            grade >= 60 && grade < 70 ? 'D' :
            'F'
  }