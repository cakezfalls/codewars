// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//My Solution:

export const boolToWord = (bool: boolean): string => {
    return !bool ? 'No' : 'Yes';
  };