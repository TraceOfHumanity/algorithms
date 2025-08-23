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
      this.head!.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
      this.head!.prev = null;
    }
    this.length--;
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
    const before = this.get(index - 1);
    const after = before!.next;
    before!.next = newNode;
    newNode.prev = before!;
    newNode.next = after;
    after!.prev = newNode;
    this.length++;
    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const temp = this.get(index);
    
    temp!.prev!.next = temp!.next;
    temp!.next!.prev = temp!.prev;
    temp!.next = null;
    temp!.prev = null;
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
}

let doublyLinkedList = new DoublyLinkedList(4);
console.log(doublyLinkedList.push(5))
console.log(doublyLinkedList.pop())
console.log(doublyLinkedList.pop())
console.log(doublyLinkedList)
