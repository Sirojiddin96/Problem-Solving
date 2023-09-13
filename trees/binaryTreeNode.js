/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

 class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}
var mergeTwoLists = function (list1, list2) {

};

let list1 = [1, 2, 4]
let list2 = [1, 3, 4]
console.log(mergeTwoLists(list1, list1))