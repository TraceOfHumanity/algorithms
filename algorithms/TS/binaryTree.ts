class BinaryTreeNode {
    value: number;
    left: BinaryTreeNode | null;
    right: BinaryTreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root: BinaryTreeNode | null;

    constructor() {
        this.root = null;
    }

    insert(value: number) {
        const newNode = new BinaryTreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value) return undefined;
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }
            if (newNode.value > temp.value) {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
        return this;
    }

    contains(value: number) {
        if (this.root === null) return false;
        let temp = this.root;
        while (temp) {
            if (value < temp.value) {
                temp = temp.left!;
            } else if (value > temp.value) {
                temp = temp.right!;
            } else {
                return true;
            }
        }
        return false;
    }

    recursiveContains(value: number, currentNode = this.root) {
        if (currentNode === null) return false;
        if (currentNode.value === value) return true;
        if (value < currentNode.value) {
            return this.recursiveContains(value, currentNode.left);
        } else {
            return this.recursiveContains(value, currentNode.right);
        }
    }
}

const tree = new BinaryTree();
console.log(tree.insert(47));
console.log(tree.insert(46));
console.log(tree.insert(48));
console.log(tree.contains(46));
console.log(tree.recursiveContains(50));