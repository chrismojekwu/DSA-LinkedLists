class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  search(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next == null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  delete(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;

    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(item, key) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === key) {
      this.insertFirst(item);
    }

    let currNode = this.head;
    let prevNode = this.head;

    while (currNode.next !== null && currNode.value !== key) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Not Found");
      return;
    }
    const newItem = new _Node(item);
    prevNode.next = newItem;
    newItem.next = currNode;
  }

  insertAfter(item, key) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === key) {
      this.insertLast(item);
    }

    let currNode = this.head;
    let prevNode = this.head;

    while (currNode !== null && currNode.value !== key) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Not Found");
      return;
    }
    const newItem = new _Node(item);
    prevNode.next = currNode;
    newItem.next = currNode.next;
    currNode.next = newItem;
  }

  insertAt(item, position) {
    if (!this.head) {
      return null;
    }

    if (position <= 1) {
      this.insertFirst(item);
    }

    let currNode = this.head;
    let prevNode = this.head;
    let count = 1;

    while (count < position) {
      count++;
      prevNode = currNode;
      currNode = currNode.next;
    }

    const newItem = new _Node(item);
    prevNode.next = newItem;
    newItem.next = currNode;
  }
}

function main() {
  const SLL = new LinkedList();

  SLL.insertFirst("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  SLL.insertLast("Tauhida");

  SLL.delete("Husker");
  SLL.insertBefore("Chris", "Boomer");
  SLL.insertAfter("Anwu", "Chris");
  SLL.insertAt("THREE", 3);

  return SLL;
}

function display(list) {
  if (!list.head) {
    console.log("Empty List");
  }

  let count = 1;
  let currNode = list.head;
  let prevNode = list.head;

  while (currNode !== null && currNode.value !== "") {
    console.log(count, ".", currNode.value);
    prevNode = currNode;
    currNode = currNode.next;
    count++;
  }

  return;
}

function size(list) {
  if (!list.head) {
    return 0;
  }

  let count = 0;
  let currNode = list.head;
  let prevNode = list.head;

  while (currNode !== null && currNode.value !== "") {
    prevNode = currNode;
    currNode = currNode.next;
    count++;
  }

  return count;
}

function isEmpty(list) {
  if (!list.head) {
    return true;
  }
  return false;
}

console.log(isEmpty("main()"));
