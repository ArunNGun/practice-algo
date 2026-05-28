class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // hashmap o(n)
       const obj = {}
       for(let i=0;i<nums.length;i++){
        const compli = target - nums[i]
        if(obj[compli]!== undefined){
            return [i,obj[compli]]
        }
            obj[nums[i]] = i
    
       }

    // o(n) two pointers assuming arry is always sorted
    // 7-3 = 4
    // let left =0,right=nums.length-1
    // while(left < right){
    //     if(nums[left]+nums[right] === target) return [left,right]
    //     const compli = target-nums[left]
    //     if(nums[left]+nums[right] < target) left++
    //     else right--
    // }

    }
}
