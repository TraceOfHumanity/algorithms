class DoublyNode {
  value: any;
  next: DoublyNode | null;
  prev: DoublyNode | null;

  constructor(value: any) {
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
    this.tail = this.head;
    this.length = 1;
  }

  push(value: number) {
    const newNode = new DoublyNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
      temp!.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value: number) {
    const newNode = new DoublyNode(value);
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

  insert(index: number, value: number) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);
    const newNode = new DoublyNode(value);
    const temp = this.get(index - 1);
    newNode.next = temp!.next;
    temp!.next = newNode;
    this.length++;
    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const temp = this.get(index);
    const before = this.get(index - 1);
    before!.next = temp!.next;
    temp!.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let before: DoublyNode | null = null;
    let after: DoublyNode | null = temp!.next;
    for (let i = 0; i < this.length; i++) {
      after = temp!.next;
      temp!.next = before;
      before = temp;
      temp = after;
    }
    return this;
  }

  findKthFromEnd(k) {
    let slow = this.head;
    let fast = this.head;
    for (let i = 0; i < k; i++) {
      if (fast === null) {
        return null;
      }
      fast = fast.next;
    }
    while (fast !== null) {
      slow = slow!.next;
      fast = fast!.next;
    }
    return slow;
  }

  hasLoop() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow!.next;
      fast = fast!.next!.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }
}

let doublyLinkedList = new DoublyLinkedList(4);
// console.log(myLinkedList.push(5));
// console.log(myLinkedList.pop())
// console.log(myLinkedList.pop())
// console.log(myLinkedList.unshift(3))
// console.log(myLinkedList.shift())
// console.log(myLinkedList);
// console.log(myLinkedList.unshift(1))
// console.log(myLinkedList.unshift(2))
// console.log(myLinkedList.unshift(3))
// console.log(myLinkedList.get(0));
// console.log(myLinkedList.get(2));
// console.log(myLinkedList.set(2, 10));
// console.log(myLinkedList.get(2));
// console.log(myLinkedList.push(5));
// console.log(myLinkedList.insert(2, 10));
// console.log(myLinkedList.get(2));
// console.log(myLinkedList.reverse());
console.log(doublyLinkedList.push(5))
console.log(doublyLinkedList.pop())
console.log(doublyLinkedList.pop())
console.log(doublyLinkedList)
