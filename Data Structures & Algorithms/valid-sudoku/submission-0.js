class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const super_hash = {};

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const row_key = `r${i}`;
                const col_key = `c${j}`;
                const box_key = `b${Math.floor(i / 3)}${Math.floor(j / 3)}`;

                const value = board[i][j]

                if (value === ".") continue;

                if(!super_hash[row_key]) super_hash[row_key] = new Set()
                if(!super_hash[col_key]) super_hash[col_key] = new Set()
                if(!super_hash[box_key]) super_hash[box_key] = new Set()

                if(super_hash[row_key].has(value) || super_hash[col_key].has(value) || super_hash[box_key].has(value)){
                    return false
                }

                super_hash[row_key].add(value)
                super_hash[col_key].add(value)
                super_hash[box_key].add(value)
            }
        }

        return true;
    }
}
