//// # Problem

/// Given
// var nums = [1, 2, 3, 4, 5, 3, 2, 3, -3, -7];
// var val = 4;

/// condition
// 1. remove element(val) from nums
// 2. after remove element new array length

/// Example
// var nums = [1, 2, 3, 4, 5, 3, 2, 3, -3, -7];
// var val = 4;

/// Output
// {
//   array: [-7, -3, 1, 2, 2, 3, 3, 3, 5]
//   length: 9
// }


var nums = [1, 2, 3, 4, 5, 3, 2, 3, -3, -7];
var val = 4;

function RemoveElementByValue(array, removeElement) {
  var resultArray = array
    .filter((element) => element !== removeElement)
    .sort((a, b) => a - b);

  var result = {
    array: resultArray,
    length: resultArray.length,
  };
  return result;
}

console.log(RemoveElementByValue(nums, val));
