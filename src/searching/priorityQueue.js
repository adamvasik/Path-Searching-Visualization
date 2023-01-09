class PriorityQueue {
  constructor(comparator) {
    this.heap = [];
    this.comparator = comparator;
  }

  enqueue(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue() {
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return value;
  }

  hasValue(value) {
    return this.heap.includes(value);
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.comparator(this.heap[index], this.heap[parentIndex])) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    while (index < this.heap.length) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let smallerChildIndex = index;
      if (leftChildIndex < this.heap.length && this.comparator(this.heap[leftChildIndex], this.heap[smallerChildIndex])) {
        smallerChildIndex = leftChildIndex;
      }
      if (rightChildIndex < this.heap.length && this.comparator(this.heap[rightChildIndex], this.heap[smallerChildIndex])) {
        smallerChildIndex = rightChildIndex;
      }
      if (smallerChildIndex !== index) {
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }
}


export { PriorityQueue }