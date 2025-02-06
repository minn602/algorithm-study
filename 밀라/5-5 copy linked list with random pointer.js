// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const map = new Map()
        map.set(null, null)

        let cur = head
        //first pass -> create new node
        while(cur) {
            const node = new Node(cur.val)
            map.set(cur, node)
            cur = cur.next
        }

        cur = head
        //second pass -> connect pointers 
        while(cur) {
            const node = map.get(cur)
            node.next = map.get(cur.next)
            node.random = map.get(cur.random)
            cur = cur.next
        }

        return map.get(head)
    }
}
