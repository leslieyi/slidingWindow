// 1876. Substrings of Size Three with Distinct Characters
// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.

 

// Example 1:

// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
// The only good substring of length 3 is "xyz".

// Example 2:

// Input: s = "aababcabc"
// Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".
 

// Constraints:

// 1 <= s.length <= 100
// s​​​​​​ consists of lowercase English letters.


function countGoodSubstrings(s){
    let count = 0 
    if(s.length <3) return 0

    let substring = [s[0], s[1]]
    for (let i = 2; i < s.length; i++) {
        substring.push(s[i]); //add 1 character at the end
        if (new Set(substring).size === 3) count++
        substring.shift()//remove the first one

    }
    return count

    // let good = 0;

	// for (let index = 0; index < s.length - 2; index++) {
	// 	const subStr = s.slice(index, index + 3);
	// 	const set = new Set(subStr);

	// 	set.size === 3 && (good += 1);
	// }
	// return good;
}

console.log(countGoodSubstrings("aababcabc"))
console.log(countGoodSubstrings("abc"))