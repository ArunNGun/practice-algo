class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
  const obj = {}

  for (let str of strs) {
    const key = [...str].sort().join('')  // sorted str = anagram key

    if (!obj[key]) obj[key] = []
    obj[key].push(str)
  }

  return Object.values(obj)
}
}
