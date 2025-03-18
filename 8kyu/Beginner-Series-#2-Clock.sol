// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.


//My Solution:

contract Kata {
  function past(int h, int m, int s) public pure returns (int) {
   return (h * 3600000) + (m * 60000) + (s * 1000);
  }
}