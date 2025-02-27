// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

//My Solution:

export const makeNegative = (num: number): number => {
    return num > 0 ? -num : num;
  };
