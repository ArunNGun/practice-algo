class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
  const freq = {};
  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
//   return Object.entries(freq)
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, k)
//     .map(([num]) => Number(num));
//     }

//bucket solution
  const buckets = Array.from({ length: nums.length + 1 }, () => []);
for (const [num, count] of Object.entries(freq)) {
    buckets[count].push(Number(num));
  }
  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]);
  }

  return result;
    }
}