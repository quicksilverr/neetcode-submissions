class Solution {
    /**
     * Bucket sort approach
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        const frequent_elements = []
        const max_freq = nums.length
        for(const num of nums){
            count[num] =  (count[num] || 0) + 1
        }
        const frequency_array = Array(max_freq).fill([])
        for(const element of Object.entries(count)){
            frequency_array[element[1] - 1] = [...frequency_array[element[1] - 1], Number(element[0])]
            console.log(frequency_array, element[1] - 1)
        }

        for(let i=max_freq; i >= 0; i--){
            if(frequency_array[i] && frequent_elements.length < k){
                frequent_elements.push(...frequency_array[i])
            }
        }        

        return frequent_elements
    }
}
