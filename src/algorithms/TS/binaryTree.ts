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

    recursiveInsert(value: number, currentNode = this.root) {
        if (this.root === null) return new BinaryTreeNode(value);
        if (currentNode === null) return new BinaryTreeNode(value);


        if (value < currentNode.value) {
            currentNode.left = this.recursiveInsert(value, currentNode.left);
        } else {
            currentNode.right = this.recursiveInsert(value, currentNode.right);
        }
        return currentNode;
    }

    minValue(currentNode: BinaryTreeNode) {
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }

    deleteNode(value: number, currentNode = this.root) {
        if (currentNode === null) return null;

        if (value < currentNode.value) {
            currentNode.left = this.deleteNode(value, currentNode.left);
        } else if (value > currentNode.value) {
            currentNode.right = this.deleteNode(value, currentNode.right);
        } else {
            if (currentNode.left === null && currentNode.right === null) {
                return null;
            } else if (currentNode.left === null) {
                return currentNode.right;
            } else if (currentNode.right === null) {
                return currentNode.left;
            } else {
                let subTreeMinValue = this.minValue(currentNode.right);
                currentNode.value = subTreeMinValue;
                currentNode.right = this.deleteNode(subTreeMinValue, currentNode.right);
            }
        }
        return currentNode;
    }

    BFS() {
        let currentNode = this.root;
        if (currentNode === null) return [];
        let results: number[] = [];
        let queue: BinaryTreeNode[] = [];
        queue.push(currentNode);
        while (queue.length) {
            currentNode = queue.shift()!;
            results.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        return results;
    }

    DFSPreOrder() {
        let results: number[] = [];
        function traverse(currentNode: BinaryTreeNode) {
            results.push(currentNode.value);
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
        }
        if (!this.root) return [];
        traverse(this.root);
        return results;
    }

    DFSPostOrder() {
        let results: number[] = [];
        function traverse(currentNode: BinaryTreeNode) {
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
            results.push(currentNode.value);
        }
        if (!this.root) return [];
        traverse(this.root);
        return results;
    }

    DFSInOrder() {
        let results: number[] = [];
        function traverse(currentNode: BinaryTreeNode) {
            if (currentNode.left) traverse(currentNode.left);
            results.push(currentNode.value);
            if (currentNode.right) traverse(currentNode.right);
        }
        if (!this.root) return [];
        traverse(this.root);
        return results;
    }
}

const tree = new BinaryTree();
console.log(tree.insert(47));
console.log(tree.insert(46));
console.log(tree.insert(48));
console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());