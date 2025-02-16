class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;
        const ROWS = grid.length, COLS = grid[0].length;

        const dfs = (r, c) => {
            //아래 현재 셀의 위,아래,좌우를 재귀호출할때 그리드 영역밖을 넘어 갈 수 있어 조건 추가
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] == '0') return;

            //방문한 셀은 '0'으로 표기하여 재 방문하지 않도록 한다.
            grid[r][c] = '0'

            dfs(r+1, c); //아래
            dfs(r-1, c); //위
            dfs(r, c+1); //오른쪽
            dfs(r, c-1); //왼쪽
        }

        //그리드 순회 
        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                //현재 셀이 땅인 경우 dfs 함수 호출
                if(grid[r][c] == '1') {
                    dfs(r, c);
                    count++;
                }
            }
        }

        return count;
    }
}
