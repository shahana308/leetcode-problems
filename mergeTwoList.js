var mergeTwoLists = function (l1, l2) {
  const list3 = new ListNode();
  var cur = list3;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  while (l1) {
    cur.next = l1;
    l1 = l1.next;
    cur = cur.next;
  }
  while (l2) {
    cur.next = l2;
    l2 = l2.next;
    cur = cur.next;
  }
  return list3.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
