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

  unshift(value: number) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    this.head = this.head!.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp!.next;
    }
    return temp;
  }

  set(index: number, value: number) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
}

let myLinkedList = new LinkedList(4);
console.log(myLinkedList.push(5));
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
console.log(myLinkedList.unshift(3))
console.log(myLinkedList.shift())
console.log(myLinkedList);
console.log(myLinkedList.unshift(1))
console.log(myLinkedList.unshift(2))
console.log(myLinkedList.unshift(3))
console.log(myLinkedList.get(0));
console.log(myLinkedList.get(2));
console.log(myLinkedList.set(2, 10));
console.log(myLinkedList.get(2));