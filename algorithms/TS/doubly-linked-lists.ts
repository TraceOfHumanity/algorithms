class DoublyNode {
  value: number;
  next: DoublyNode | null;
  prev: DoublyNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: DoublyNode | null;
  tail: DoublyNode | null;
  length: number;

  constructor(value: number) {
    const newNode = new DoublyNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(4);
console.log(myDoublyLinkedList);
