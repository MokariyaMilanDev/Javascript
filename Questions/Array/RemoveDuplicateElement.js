//// # Problem :

/// Given
// var arr = [1, 2, 3, 4, 5, 3, 2, 3, -3, -7];

/// condition
// 1. remove duplicate element from arr
// 2. sort [1,2,3,4,5,...];

/// Example
// var nums = [1, 2, 3, 4, 5, 3, 2, 3, -3, -7];

/// Output
// [-7, -3, 1, 2, 3, 4, 5];


//// # Solution :

var arr = [1, 2, 3, 4, 5, 3, 2, 3, -3, -7];

function RemoveDuplicatesElement(array) {
  const setOfArray = new Set(array);
  const result = [...setOfArray].sort((a, b) => a - b);
  return result;
}

console.log(RemoveDuplicatesElement(arr));
