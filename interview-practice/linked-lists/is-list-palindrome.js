// https://app.codesignal.com/interview-practice/task/HmNvEkfFShPhREMn4/description

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

function isListPalindrome(l) {
  let slow = l;
  let fast = l;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  slow = reversed(slow);
  fast = l;

  while (slow !== null) {
    if (slow.value !== fast.value) {
      return false;
    }

    slow = slow.next;
    fast = fast.next;
  }

  return true;
}

function reversed(head) {
  let prev = null;

  while (head !== null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}
