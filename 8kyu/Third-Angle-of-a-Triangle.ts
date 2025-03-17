// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

//My Solution:

// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract ThirdAngle {
  function otherAngle(int angle1, int angle2) public pure returns (int) {
    int a1 = angle1;
    int a2 = angle2;
    return 180 - a1 - a2;
  }
}
