class StackNode {
  value: number;
  next: StackNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  top: StackNode | null;
  length: number;

  constructor(value: number) {
    const newNode = new StackNode(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value: number) {
    const newNode = new StackNode(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const temp = this.top;
    this.top = this.top!.next;
    temp!.next = null;
    this.length--;
    return temp;
  }
}

let myStack = new Stack(4);
console.log(myStack);
console.log(myStack.push(5));
console.log(myStack.pop());
