// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

let twoSum = function (nums, target) {
  let seenNumber = {};
  let answer = [];

  nums.forEach((number, index) => {
    let complement = target - number;
    if (seenNumber.hasOwnProperty(complement)) {
      answer = [index, seenNumber[complement]];
    } else {
      seenNumber[number] = index;
    }
  });
  return answer;
};

console.log(twoSum([1, 2, 3, 4, 5], 9));
