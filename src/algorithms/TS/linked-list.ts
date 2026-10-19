class LinkedListNode {
  value: number;
  next: LinkedListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;
  length: number;

  constructor(value: number) {
    const newNode = new LinkedListNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value: number): this {
    const newNode = new LinkedListNode(value);
    if (this.length === 0) {
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
    if (this.length === 0) return null;
    if (this.length === 1) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return node;
    }
    let temp = this.head;
    while (temp!.next?.next) temp = temp!.next;
    const removed = temp!.next;
    temp!.next = null;
    this.tail = temp;
    this.length--;
    return removed;
  }

  unshift(value: number): this {
    const newNode = new LinkedListNode(value);
    if (this.length === 0) {
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
    if (this.length === 0) return null;
    const removed = this.head;
    this.head = this.head!.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return removed;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return null;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp?.next || null;
    }
    return temp;
  }

  set(index: number, value: number) {
    const temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index: number, value: number): this {
    if (index < 0 || index > this.length) throw new Error("Invalid index");
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new LinkedListNode(value);
    const before = this.get(index - 1)!;
    newNode.next = before.next;
    before.next = newNode;
    this.length++;
    return this;
  }
  remove(index: number) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const before = this.get(index - 1);
    const temp = before!.next;
    before!.next = temp!.next;
    temp!.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let prew = null;
    let next = temp?.next;
    for (let i = 0; i < this.length; i++) {
      if (!temp) break;
      next = temp.next;
      temp.next = prew;
      prew = temp;
      temp = next;
    }
    return this;
  }
}

const myLinkedList = new LinkedList(1);
// console.log(myLinkedList);
// console.log(myLinkedList.push(1));
// console.log(myLinkedList);
// console.log(myLinkedList.pop());
// console.log(myLinkedList);
// console.log(myLinkedList.unshift(2));
// console.log(myLinkedList);
// console.log(myLinkedList.shift());
// console.log(myLinkedList);
// console.log(myLinkedList.get(0));
// console.log(myLinkedList);
// console.log(myLinkedList.set(0, 0));
// console.log(myLinkedList);
// console.log(myLinkedList.insert(0, 1));
// console.log(myLinkedList);
// console.log(myLinkedList.remove(1));
// console.log(myLinkedList);
// console.log(myLinkedList.push(2));
// console.log(myLinkedList);
console.log(myLinkedList.push(2));
console.log(myLinkedList.push(3));
console.log(myLinkedList.reverse());
