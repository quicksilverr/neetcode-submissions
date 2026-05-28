class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const str_map = {}

        for(const str of strs){
            const freq_signature = Array(26).fill(0)
            for (const s of str){
                const freq_index = s.charCodeAt(0) - 'a'.charCodeAt(0)
                freq_signature[freq_index] = (freq_signature[freq_index] || 0) + 1
            }
            const freq_signature_code = freq_signature.join('#')
             if(str_map[freq_signature_code]){
                str_map[freq_signature_code].push(str)
             } else {
                str_map[freq_signature_code] = [str]
             }
        }

        return Object.values(str_map)
    }
}
