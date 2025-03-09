// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

//My Solution:

export class Kata {
    static validatePin(pin: string): boolean {
      const newArray = pin.split(''); 
       return (newArray.every(i => /^\d$/.test(i)) && (newArray.length === 4 || newArray.length === 6)) 
    }
  }