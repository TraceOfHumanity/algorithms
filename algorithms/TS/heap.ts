class Heap {
    private heap: number[] = [];

    public getHeap() {
        return [...this.heap];
    }

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

    insert(value: number) {
        this.heap.push(value);
        let current = this.heap.length - 1;

        while (current > 0 && this.heap[current] > this.heap[this.parent(current)]) {
            this.swap(current, this.parent(current));
            current = this.parent(current);
        }
    }

    remove() {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();
        const maxValue = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.sinkDown(0);
        return maxValue;
    }

    sinkDown(index: number) {
        let maxIndex = index;
        let size = this.heap.length;
        while (true){
            let leftIndex = this.leftChild(index);
            let rightIndex = this.rightChild(index);

            if (leftIndex < size && this.heap[leftIndex] > this.heap[maxIndex]) {
                maxIndex = leftIndex;
            }

            if (rightIndex < size && this.heap[rightIndex] > this.heap[maxIndex]) {
                maxIndex = rightIndex;
            }

            if (maxIndex !== index) {
                this.swap(index, maxIndex);
                index = maxIndex;
            } else {
                break;
            }
            
        }
    }
}

const myHeap = new Heap();
myHeap.insert(10);
myHeap.insert(20);
myHeap.insert(30);
myHeap.insert(15);
// myHeap.remove();


console.log(myHeap.getHeap());