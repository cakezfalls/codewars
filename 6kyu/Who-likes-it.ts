// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
// We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:

//My Solution:

export const likes = (a : string[]) : string => {
  
    if (a.length === 1) {
      return `${a[0]} likes this`;
    } else if (a.length === 2) {
      return `${a[0]} and ${a[1]} like this`;
    } else if (a.length === 3) {
      return `${a[0]}, ${a[1]} and ${a[2]} like this`;
    } else if (a.length >= 4) { 
      return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
    }
    return "no one likes this";
}