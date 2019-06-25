class Queue {
  constructor() {
    this.queue = [];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  /**
   * Returns the item at the front of the line/queue w/o modifying the queue
   */
  peek() {
    if (this.isEmpty()) return null;

    const [next, ...rest] = this.queue;
    return next;
  }

  /**
   * Add item to the end of the queue
   * ie: go to the back of the line
   *
   * @param {*} value
   */
  enqueue(value) {
    this.queue = [...this.queue, value];
  }

  /**
   * Remove item at the front of the queue
   * ie: next in line passes go
   */
  dequeue() {
    const [next, ...updatedQueue] = this.queue;
    this.queue = updatedQueue;
  }

  /**
   * String representation of the queue
   */
  toString() {
    return this.queue.toString();
  }
}

export default Queue;
