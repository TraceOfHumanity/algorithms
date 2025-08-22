class ListNode {
  value: any;
  next: ListNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor(value: number) {
    const newNode = new ListNode(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value: number) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp!.next) {
      pre = temp!;
      temp = temp!.next;
    }
    this.tail = pre;
    this.tail!.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
}

let myLinkedList = new LinkedList(4);
myLinkedList.push(5);
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
console.log(myLinkedList);