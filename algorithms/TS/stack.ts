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

  push(value: any) {
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

  print() {
    let temp = this.top;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
    return this;
  }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.print());
console.log(myStack.pop());
console.log(myStack.print());