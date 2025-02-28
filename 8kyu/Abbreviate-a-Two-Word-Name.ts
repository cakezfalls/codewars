// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


//My Solution:

export function abbrevName(name: string): string {
    const arrayNames:string[] = name.split(' ');
    return String(arrayNames[0].slice (0,1) + '.' + arrayNames[1].slice (0,1)).toUpperCase();
}