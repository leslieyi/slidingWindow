// write a function which accepts an array of integers and a number called n.
// The function should calculate the max sum of n consecutive elements in the array.

function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null; //edgecase

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]; //summing the first three!
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]; //subtract first one, and add the end one.
    maxSum = Math.max(maxSum, tempSum); //will return whatever is bigger
  }

  return maxSum;
}

// maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
// O(n) - linear complexity, only loop one time, going over entire array one time.
