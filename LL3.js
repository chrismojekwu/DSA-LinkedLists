// HEAD & TAIL APPROACH (doubly linked list)
/*class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}*/

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  // add to the end of the list
  append(value) {
    //if list is empty
    if (!this.tail) {
      this.head = thistail = new Node(value);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }

  // add to the beginning of the list
  prepend(value) {
    //if list is empty
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }

  // remove first list item
  deleteHead() {
    if (!this.head) {
      return null;
    } else {
      let removed = this.head;

      //if one node is left
      if (this.head === this.tail) {
        // reset head and tail to null
        this.head = this.tail = null;
      } else {
        // reset pointers
        this.head = this.head.next;
        this.head.prev = null;
      }
      // send deleted value
      return removed.value;
    }
  }

  deleteTail() {
    // empty list
    if (!this.tail) {
      return null;
    } else {
      let removed = this.tail;

      //if 1 node left
      if (this.head === this.tail) {
        // reset head and tail to null
        this.head = this.tail = null;
      } else {
        // change pointerts
        this.tail = this.tail.prev;
        this.tail.next === null;
      }
      // return value
      return removed.value;
    }
  }

  search(value) {
    //empty
    if (!this.head) {
      return null;
    }

    // if the head is the value
    if (this.head.value === value) {
      return this.head;
    } else {
      // set current and previous nodes
      let currentNode = this.head;
      let prevNode = this.head;

      //traverse the list
      while (currentNode.next !== null && currentNode.value !== value) {
        //if the value isnt found by the end of the list
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      return currentNode.value === value ? currentNode : "Value not found";
    }
  }
}

//let Test = new LinkedList();

//Test.prepend("One");
//Test.append("Two");
//Test.append("Three");
//Test.append("Four");
//Test.append("Five");

//console.log(Test.search("Three"));

// VALUE & NEXT APPROACH (singly linked list)
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class List {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    //check for empty list
    if (this.head === null) {
      //if so insert the item and set its next pointer to null
      this.head = new _Node(value, null);
    }
    //otherwise set the head to a new node and point its value to the current head
    this.head = new _Node(value, this.head);
  }

  insertLast(value) {
    //check for empty list
    if (this.head === null) {
      //if so use insertFirst to create a node
      this.insertFirst(value);
    }
    //otherwise we will want to traverse to the end of the list
    let currNode = this.head;

    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    //when the loop exits we've reached a null pointer/the end of the lsit
    // set that nodes pointer to our new node
    currNode.next = new _Node(value, null);
  }

  deleteFirst() {
    //empty list
    if (!this.head) {
      return null;
    } //otherwise
    //create a variable for the first list node
    let oldHead = this.head;
    //redefine the head of the list as the second node
    this.head = this.head.next;
    //remove the originals nodes next pointer
    oldHead.next = null;
  }

  deleteLast() {
    //empty list
    if (!this.head) {
      return null;
    } //otherwise

    // traverse the list & keep a track of values
    let currNode = this.head;
    let prevNode = this.head;

    while (currNode.next !== null) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    //when the loop exits you are at a null next pointer or end of the lsit
    // reset the previous nodes pointers to null to break the last nodes connection in the list
    prevNode.next = null;
  }

  search(value) {
    //empty list
    if (!this.head) {
      console.log("Empy List!");
    } // otherwise
    // keeep a track of the current node
    let currNode = this.head;

    while (currNode.value !== value) {
      currNode = currNode.next;
    }
    //when the loop exits the value is found so i will return its node
    return currNode;
  }

  searchDelete(value) {
    //empty list
    if (!this.head) {
      console.log("Empy List!");
    }
    //if its the first item in the list
    if (this.head.value === value) {
      this.deleteFirst();
    } //otherwise
    //define your variables
    let prevNode = this.head;
    let currNode = this.head;

    //traverse the list
    while (currNode.next !== null && currNode.value !== value) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    //if the loop exits you have either reached the end of the or the value
    //check for the end of the lsit
    if (currNode.next === null) {
      console.log("item not found");
    } //otherwise reset the previous nodes nointers
    let oldNode = currNode;
    prevNode.next = currNode.next;
    //break the old pointers relationship to the list
    oldNode.next = null;
  }

  // DOESNT WORK!!!!!! >:(
  insertAt(value, index) {
    //empty list
    if (!this.head) {
      this.head = new _Node(value, null);
      console.log("Empy List Data Inserted at head");
    } // otherwise

    //create value to traverse save values and find the correct index in lsit
    let prevNode = this.head;
    let currNode = this.head;
    let count = 0;

    while (count < index) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    //when the loop exits you should be at the correct position in the list to insert the data
    // reset your nodes pointers to include your new data
    let newNode = new _Node(value, currNode.next);
    prevNode.next = newNode;
    newNode.next = currNode;
    return "data inserted";
  }
}

let List2 = new List();

List2.insertFirst("One");
List2.insertFirst("Two");
List2.insertFirst("Three");
List2.insertFirst("Four");
List2.insertLast("Last");
List2.deleteLast();
List2.deleteFirst();
List2.searchDelete("Two");

console.log(List2.head.next);
