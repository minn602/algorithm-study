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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = new ListNode(0, head)
        let left = dummy, right = head

        //initialize the start point of right
        while(n > 0) {
            right = right.next
            n--
        }

      //move once
        while(right) {
            left = left.next
            right = right.next
        }

      //left.next node is target to remove
        left.next = left.next.next

        return dummy.next
    }
}
