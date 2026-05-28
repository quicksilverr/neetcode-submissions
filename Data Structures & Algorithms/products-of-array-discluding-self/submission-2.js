class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        console.log(nums)
        const n = nums.length
        const result = Array(n).fill(0)
        let prefix = 1
        for(let i=0 ;i < n; i++){
            result[i] = prefix
            prefix = prefix * nums[i]
        }

        let suffix = 1
        for(let i=n-1; i >=0; i--){
            result[i] = suffix * result[i]
            suffix = suffix * nums[i]
        }
        return result
    }
}
