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
     * @return {boolean}
     */
    // hasCycle(head) {
    //     let slow = head
    //     let fast = head
    //     while(fast && fast.next !==null){
    //        slow = slow.next
    //        fast = fast.next.next

    //        if(slow === fast) return true
    //     }
    //     return false
    // }
    hasCycle(head) {
        let fast = head
        while(fast){
           if(fast.val ==='932394_') return true
           fast.val='932394_'
           fast=fast.next
        }
        return false
    }
}
