class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const n = numbers.length;
        let i = 0;
        let j = n - 1;
        while (i < n || j > 0) {
            const sum = numbers[i] + numbers[j];

            if (sum === target) {
                return [i + 1, j + 1];
            }

            if (sum > target) {
                j--;
            } else if (sum < target) {
                i++;
            }
        }
    }
}
