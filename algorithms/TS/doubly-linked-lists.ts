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

  push(value: number) {
    const newNode = new DoublyNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    console.log(this.length);
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
      temp!.prev = null;
    }
    this.length--;
    console.log(this.length);
    return temp;
  }

  unshift(value: number) {
    const newNode = new DoublyNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head!.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    console.log(this.length);
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    const temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
      this.head!.prev = null;
    }
    this.length--;
    console.log(this.length);
    return temp;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp!.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp!.prev;
      }
    }
    console.log(temp);
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
    const before = this.get(index - 1)!;
    const after = before!.next;
    newNode.next = after;
    newNode.prev = before;
    before!.next = newNode;
    after!.prev = newNode;
    this.length++;
    console.log(this);
    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const temp = this.get(index)!;
    temp.prev!.next = temp.next;
    temp.next!.prev = temp.prev;
    temp.next = null;
    temp.prev = null;
    this.length--;
    console.log(this);
    return temp;
  }

  isPalindrome() {
    if (this.length <= 1) return true;
    let start = this.head;
    let end = this.tail;
    for (let i = 0; i < this.length / 2; i++) {
      if (start!.value !== end!.value) {
        return false;
      }
      start = start!.next;
      end = end!.prev;
    }
    return true;
  }

  reverse() {
    let current = this.head;
    let temp: DoublyNode | null = null;

    this.head = this.tail;
    this.tail = current;

    while (current) {
      temp = current.prev;

      current.prev = current.next;
      current.next = temp;

      current = current.prev;
    }

    return this;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(4);
myDoublyLinkedList.push(5);
myDoublyLinkedList.push(6);
myDoublyLinkedList.push(7);
console.log(myDoublyLinkedList.reverse());
