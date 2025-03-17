// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.


//My Solution:

// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Repeater {
  function multiply(uint8 repeat, string memory pattern) public pure returns (string memory) {
    string memory result = pattern;

    if (repeat == 0) {
      return '';
    } 

    for (uint i = 1; i < repeat; i++) {
        result = string(abi.encodePacked(result, pattern));      
    }
    return result;
  }
