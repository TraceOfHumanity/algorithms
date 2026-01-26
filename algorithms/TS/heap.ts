class Heap {
    private heap: number[];

    private leftChild(index: number) {
        return 2 * index + 1;
    }
    private rightChild(index: number) {
        return 2 * index + 2;
    }
    private parent(index: number) {
        return Math.floor((index - 1) / 2);
    }
    private swap(index1: number, index2: number) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
}