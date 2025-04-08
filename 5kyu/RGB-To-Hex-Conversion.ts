// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

//My Solution:

export function rgb(r: number, g: number, b: number): string {
  const toHex = (n: number): string => {
    const clamped = Math.max(0, Math.min(255, n));
    return clamped.toString(16).toUpperCase().padStart(2, "0");
  };

  return toHex(r) + toHex(g) + toHex(b);
}
