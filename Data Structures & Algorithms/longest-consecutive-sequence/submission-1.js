class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sequence = new Map()
        let longest = 0

        for(const num of nums){
            if(sequence.get(num)) continue

            const left = sequence.get(num - 1) || 0
            const right = sequence.get(num + 1) || 0

            const length = left + 1 + right

            sequence.set(num, length)
            sequence.set(num - left, length)
            sequence.set(num + right, length)

            longest = Math.max(longest, length)
            
        }

        return longest
    }
}
