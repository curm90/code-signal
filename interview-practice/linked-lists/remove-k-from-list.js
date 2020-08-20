// https://app.codesignal.com/interview-practice/task/gX7NXPBrYThXZuanm

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

function removeKFromList(l, k) {
  // place to store the dummy node
  let dummy = new ListNode();
  // set dummy.next to start of the list (l)
  dummy.next = l;
  // place to store the current node - set to dummy (start of list)
  let current = dummy;

  // while current has a next node
  while (current.next) {
    // if currents next value is equal to k
    if (current.next.value === k) {
      // set currents next value to currents next next value
      current.next = current.next.next;
      // else
    } else {
      // increment current
      current = current.next;
    }
  }
  // return dummys next node (start of list)
  return dummy.next;
}

function removeKFromList(l, k) {
  if (l === null) return null;

  l.next = removeKFromList(l.next, k);
  return l.value === k ? l.next : l;
}

console.log(removeKFromList([3, 1, 2, 3, 4, 5], 3), [1, 2, 4, 5]);
console.log(removeKFromList([1, 2, 3, 4, 5, 6, 7], 10), [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
]);
console.log(removeKFromList([1000, 1000], 1000), []);
