class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_str = "";
        for (const str of strs) {
            encoded_str = `${encoded_str}${str.length}#${str}`;
        }
        return encoded_str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0
        let result = []

        while (i < str.length){
            let j = i
            while(str[j] !== '#'){
                j++
            }
            const length = parseInt(str.substring(i,j))
            i = j + 1
            j = i + length
            const sub_string = str.substring(i,j)
            result.push(sub_string)
            i = j
        }       
        return result
    }
}
