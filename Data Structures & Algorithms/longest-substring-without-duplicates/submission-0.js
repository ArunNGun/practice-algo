class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const obj ={}
        let left=0, max=0
      for (let right = 0; right < s.length; right++) {
    if (obj[s[right]] !== undefined && obj[s[right]] >= left) {
      left = obj[s[right]] + 1;
    }
    obj[s[right]] = right;
    max = Math.max(max, right - left + 1);
  }
        return max
    }
}
