//// # Problem :

/// given
// var nums = [10, 20, 30, 40, 60, 22, 43, 35, 65, 23, 12, 43, 23];

/// condition
// 1. sort array between given values

/// Example
// var nums1 = [1, 2, 3, 0, 0, 4];
// call -> function -> (from: 2, to: 4);

/// Output
// [ 2, 3, 4]


//// # Solution :

var nums = [10, 20, 30, 40, 60, 22, 43, 35, 65, 23, 12, 43, 23];

function filterByFrom_To(array, from, to) {
  const result = nums
    .filter((value) => value >= from && value <= to)
    .sort((a, b) => a - b);

  return result;
}

console.log(filter(nums, 20, 40));
