// Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

// choose a text in capital letters including or not digits and non alphabetic characters,

// shift each letter by a given number but the transformed letter must be a letter (circular shift),
// replace each digit by its complement to 9,
// keep such as non alphabetic and non digit characters,
// downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
// reverse the whole result.

//My Solution:

export function playPass(s: string, n: number): string {
  const shifted = s.split("").map((char, index) => {
    if (/[A-Z]/.test(char)) {
      const base = "A".charCodeAt(0);
      const shiftedChar = String.fromCharCode(
        ((char.charCodeAt(0) - base + n) % 26) + base
      );

      return index % 2 === 0
        ? shiftedChar.toUpperCase()
        : shiftedChar.toLowerCase();
    }

    if (/\d/.test(char)) {
      return (9 - parseInt(char)).toString();
    }

    return char;
  });

  return shifted.reverse().join("");
}
