// function called minSubArrayLen accepts two params - an array of positive integers and a positive int.
//this function Return the minimal length of a contagious subarray of which the sum is greater than or equal to the integer passed to the function.
//if there isn't one, return 0 instead of undefined

//minSubArrayLen([2,3,1,2,4,3],7)//2 -> because [4,3] are the smallest subarray
//minSubarrayLen([2,1,6,5,4],9) // 2 because [5,4] smallest subarray
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
