/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        //방문한 노드를 추적하기 위해 해쉬맵 사용(key : old node, value : new node)
        const oldToNew = new Map();

        const dfs = (node, oldToNew) => {
            //base case
            if(!node) return null;
            //이미 맵에 노드를 저장했는지 확인(순환참조, 중복복제 방지)
            if(oldToNew.has(node)) return oldToNew.get(node);

            const copy = new Node(node.val);
            //이웃 탐색전에 해쉬맵에 등록
            oldToNew.set(node, copy);
            for(const nei of node.neighbors) {
                copy.neighbors.push(dfs(nei, oldToNew));
            }


            return copy;
        }

        return dfs(node, oldToNew);
    }
}
