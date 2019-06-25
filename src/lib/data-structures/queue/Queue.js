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
  peek() {}

  /**
   * Add item to the end of the queue
   * ie: go to the back of the line
   *
   * @param {*} value
   */
  enqueue(value) {}

  /**
   * Remove item at the front of the queue
   * ie: next in line passes go
   */
  dequeue() {}

  /**
   * String representation of the queue
   */
  toString() {}
}

export default Queue;
