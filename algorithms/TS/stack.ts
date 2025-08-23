class StackNode {
  value: any;
  next: StackNode | null;
  constructor(value: any, next: StackNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  top: StackNode | null;
  length: number;
  constructor() {
    this.top = null;
    this.length = 0;
  }
}

let myStack = new Stack();
console.log(myStack);