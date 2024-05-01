//// # Problem :

/// Given
// var nums = [
//   {
//     name: "a",
//     totleMarks: 33,
//   },
//   {
//     name: "b",
//     totleMarks: 55,
//   },
//   {
//     name: "c",
//     totleMarks: 67,
//   },
//   {
//     name: "d",
//     totleMarks: 22,
//   },
//   {
//     name: "e",
//     totleMarks: 98,
//   },
//   {
//     name: "f",
//     totleMarks: 87,
//   },
// ];

/// condition
// 1. give candies according to marks
// 2. calculate totle candies


//// # Solution :

var nums = [
  {
    name: "a",
    totleMarks: 33,
  },
  {
    name: "b",
    totleMarks: 55,
  },
  {
    name: "c",
    totleMarks: 67,
  },
  {
    name: "d",
    totleMarks: 22,
  },
  {
    name: "e",
    totleMarks: 98,
  },
  {
    name: "f",
    totleMarks: 87,
  },
];
var totleCandies = 0;

nums
  .sort((a, b) => a.totleMarks - b.totleMarks)
  .map((obj) => {
    if ((obj.totleMarks > 32) & (obj.totleMarks < 50)) {
      obj.isPassed = true;
      obj.candies = 5;
    } else if ((obj.totleMarks > 49) & (obj.totleMarks < 75)) {
      obj.isPassed = true;
      obj.candies = 10;
    } else if ((obj.totleMarks > 74) & (obj.totleMarks < 101)) {
      obj.isPassed = true;
      obj.candies = 15;
    } else {
      obj.isPassed = false;
      obj.candies = 1;
    }
  });
nums.forEach((obj) => (totleCandies += obj.candies));

console.log(nums, totleCandies);
