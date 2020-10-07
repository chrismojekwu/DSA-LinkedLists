class _Node {
  //create your node parameters
  constructor(value, next) {
    //set the nodes value
    this.value = value;
    //set the nodes pointer
    this.next = next;
  }
}

class List {
  constructor() {
    //initialize the head to null which signifies the end or an empty list
    this.head = null;
  }

  //insert an item to the fornt of the lsit
  insertFirst(item) {
    //point the head of the list to a new node
    this.head = new _Node(item, this.head);
    //any following insertions will point to the previously added node
  }

  //insert an item to the end of the list
  insertLast(item) {
    //first check for an empty list
    if (this.head === null) {
      //if so use our previous function to insert the item
      this.insertFirst(item);
    } else {
      //otherwise fine a temporary node variable to the first item in the list
      let tempNode = this.head;
      while (tempNode.next != null) {
        //while you have not reached the end move your node to the next
        tempNode = tempNode.next;
      }
      //when the loop exits at the end of the list reset your nodes pointers to a new node
      //that includes your item and point to null to signify the end of the list
      tempNode.next = new _Node(item, null);
    }
  }

  search(item) {
    //define current node
    let currNode = this.head;

    //if the list is empty return null
    if (!currNode) {
      return null;
    }

    //traverse the list and compare values
    while (currNode.value !== item) {
      //if the item isnt found return null
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    //when the item is found the loop ends and it is returned
    return currNode;
  }

  delete(item) {
    //if the list is empty return null
    if (!this.head) {
      return null;
    }
    //if the first item is the vauye reset pointers and delete it
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    //define a previous and current node
    let prevNode = this.head;
    let currNode = this.head;

    //traverse the list and update node variables
    while (currNode.value !== item && currNode !== null) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    //if the value is not found console log
    if (currNode === null) {
      console.log("value not found");
      return;
    }
    //otherwise if the loop exits because the value matches reset the pointers to delete it
    prevNode.next = currNode.next;
  }
}

function main() {
  let SLL = new List();

  SLL.insertFirst("Apollo");
  SLL.insertFirst("Boomer");
  SLL.insertFirst("Helo");
  SLL.insertFirst("Husker");
  SLL.insertFirst("Starbuck");

  console.log(SLL.head);
}

main();
