class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let total_prod = 1
        let zeroCounter = 0
        const prod_of_array_except_self = [];
        for(const num of nums){
            if(num){
                total_prod *= num
            } else {
                zeroCounter++
            }
        }

        if(zeroCounter > 1){
            return Array(nums.length).fill(0)
        }

        for(const num of nums){
           if(zeroCounter > 0){
                prod_of_array_except_self.push(num ? 0 : total_prod)
           } else {
                prod_of_array_except_self.push(total_prod / num);

           }
        }

        return prod_of_array_except_self;
    }
}
