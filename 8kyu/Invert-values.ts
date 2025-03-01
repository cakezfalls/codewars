// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

//My Solution:

export function invert(array: number[]): number[] {
    return array.map(i => -i);
 }