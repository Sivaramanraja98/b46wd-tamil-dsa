/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var findLength = function(head) {
    let nodes = 0;
    let thead = head;
    while (thead != null) {
        nodes++;
        thead = thead.next;
    }
    return nodes;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let length = findLength(head);

    let moves = Math.floor(length/2);

    while(moves--){
        head = head.next;
    }

    return head;
};