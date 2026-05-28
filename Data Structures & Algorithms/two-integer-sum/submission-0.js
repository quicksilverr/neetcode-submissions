class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const tracker = {}
        const n = nums.length

    for(let i = 0; i < n; i++){
        if(nums[i] in tracker){
            return [nums.indexOf(tracker[nums[i]]), i]
        } else {
            tracker[target - nums[i]] = nums[i]
        }
    }
    }
}
