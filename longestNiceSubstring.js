// 1763. Longest Nice Substring
// A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

// Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

// Example 1:

// Input: s = "YazaAay"
// Output: "aAa"
// Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
// "aAa" is the longest nice substring.

// Example 2:

// Input: s = "Bb"
// Output: "Bb"
// Explanation: "Bb" is a nice string because both 'B' and 'b' appear. The whole string is a substring.

// Example 3:

// Input: s = "c"
// Output: ""
// Explanation: There are no nice substrings.

// Example 4:

// Input: s = "dDzeE"
// Output: "dD"
// Explanation: Both "dD" and "eE" are the longest nice substrings.
// As there are multiple longest nice substrings, return "dD" since it occurs earlier.

// Constraints:

// 1 <= s.length <= 100
// s consists of uppercase and lowercase English letters.

//wut?
function longestNiceSubstring(s) {
   
    function isLongestNiceSubstring(a){
        if(a.length<2) return "";
        let checker = new Set();
        for(let i = 0; i<a.length; i++){
            checker.add(a[i]);
        }
        for(let i =0;i<a.length;i++){
            if(!checker.has(a[i].toLowerCase())||!checker.has(a[i].toUpperCase())){
                let s1=isLongestNiceSubstring(a.substring(0,i));
                let s2=isLongestNiceSubstring(a.substring(i+1,a.length));
                if(s2.length>s1.length){
                    return s2;
                }else return s1;
            }
        }
        return a;
    }
    
    return isLongestNiceSubstring(s);
}
