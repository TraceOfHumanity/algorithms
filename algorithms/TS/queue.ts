class QueueNode {
  value: any;
  next: QueueNode | null;

  constructor(value: any, next: QueueNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  first: QueueNode | null;
  last: QueueNode | null;
  length: number;

  constructor(value: any) {
    const newNode = new QueueNode(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value: any) {
    const newNode = new QueueNode(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) return undefined;
    const temp = this.first;
    this.first = this.first!.next;
    temp!.next = null;
    this.length--;
    if (this.length === 0) {
      this.first = null;
      this.last = null;
    }
    return temp;
  }

  print() {
    let temp = this.first;
    while (temp !== null) {
      console.log(temp.value,);
      temp = temp.next;
    }
    return this;
  }
}

let myQueue = new Queue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.print());
console.log(myQueue.dequeue());
// console.log(myQueue.print());