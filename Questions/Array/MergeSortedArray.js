//// # Problem :

/// given
// exp. 1 : var nums1 = [1, 2, 3, 0, 0, 4];
// exp. 2 : var nums2 = [0, 4, 5, 6];

/// condition
// 1. m variable which containe length of nums1 whole numbers (remove zero & negative numbers)
// 2. n variable which containe length of nums2 whole numbers (remove zero & negative numbers)
// 3. merge nums1 & nums2

/// Example
// var nums1 = [1, 2, 3, 0, 0, 4];
// var m = 4;
// var nums2 = [0, 4, 5, 6];
// var n = 3;

/// Output
// [ 1, 2, 3, 4, 5, 6]


//// # Solution :

var nums1 = [1, 2, 4, 3, 0, 0, 4, -2, -3];
var m = nums1.filter((a) => a !== 0 && a > 0).length;
var nums2 = [0, -6, 4, 5, 6];
var n = nums2.filter((a) => a !== 0 && 1 > 0).length;

var arrSet = new Set(nums1.concat(nums2).filter((a) => a !== 0 && a > 0));
var result = [...arrSet].sort((a, b) => a - b);
console.log(result); // [ 1, 2, 3, 4, 5, 6 ]