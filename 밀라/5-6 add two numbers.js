/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode(0)
        let cur = dummy
        let carry = 0

        while(l1 || l2 || carry) {
            let v1 = 0, v2 = 0

            if(l1) {
                v1 = l1.val
                l1 = l1.next
            }
            if(l2) {
                v2 = l2.val
                l2 = l2.next
            }

            let val = v1+v2+carry

            carry = Math.floor(val / 10)
            val = val % 10
            cur.next = new ListNode(val)
            cur = cur.next
        }

        return dummy.next
    }
}
