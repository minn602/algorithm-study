class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let max = 0, tmp = 0;
        const ROWS = grid.length, COLS = grid[0].length;

        const dfs = (r, c) => {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] == '0') return;
            grid[r][c] = '0'
            tmp++;

            dfs(r+1, c);
            dfs(r-1, c);
            dfs(r, c+1);
            dfs(r, c-1);
        }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(grid[r][c] == '1') {
                    dfs(r, c)
                    max = Math.max(max, tmp)
                    tmp = 0
                }
            }
        }

        return max
    }
}
