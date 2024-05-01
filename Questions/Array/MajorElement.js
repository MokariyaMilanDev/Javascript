//// # Problem :

/// Given
// var nums = [1, 2, 3, 4, 5, 5, 5, 7, 7];

/// condition
// 1. count max element

/// Example
// var nums = [1, 2, 3, 4, 5, 5, 5, 7, 7];

/// Output
// { maxCount: 3, maxCountNumber: 5 }


//// # Solution :

var nums = [1, 2, 3, 4, 5, 5, 5, 7, 7];

function MajorElement(arr) {
  var Count = 1;
  var maxCount = 0;
  var preNumber;
  var maxCountNumber;

  arr
    .sort((a, b) => a - b)
    .map((element, index) => {
      if (element === arr[index + 1]) {
        maxCountNumber = element;
        Count++;
      } else {
        if (arr[index + 1] === undefined) {
          maxCountNumber = preNumber;
        } else {
          if (Count > maxCount) {
            maxCount = Count;
          }
          preNumber = element;
          maxCountNumber = arr[index + 1];
          Count = 1;
        }
      }
    });

  return { maxCount, maxCountNumber };
}

console.log(MajorElement(nums));
