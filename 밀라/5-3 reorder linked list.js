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
     * @return {void}
     */
    reorderList(head) {
       	let slow = head, fast = head;
		
		//find the middle point(node)
		while(fast && fast.next) {
			slow = slow.next
			fast = fast.next.next
		}
		
		//reverse the second half
		let prev = null, cur = slow.next
        slow.next = null // divide into two
		
		while(cur) {
			let next = cur.next
			cur.next = prev
			prev = cur
			cur = next
		}
		
		//merge two halves alternatively
		let first = head, second = prev
		while(second) {
			let temp1 = first.next, temp2 = second.next;
			first.next = second
			second.next = temp1
			first = temp1
			second = temp2
		}
    }
}
