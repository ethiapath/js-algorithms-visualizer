class Stack {
  constructor(items = []) {
    this.items = items;
  }

  /**
   * Is the stack empty?
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Preview the top item in the stack w/o modifying the stack
   */
  peek() {
    if (this.isEmpty()) return null;
    const [lastItem] = this.items.slice(-1);
    return lastItem;
  }

  /**
   * Push an item to the top of the stack
   *
   * @param {*} item
   */
  push(item) {
    this.items = [...this.items, item];
    return this.items;
  }

  /**
   * Remove and return the top item from the stack
   */
  pop() {
    return this.items.pop() || null;
  }

  /**
   * Get a string representation of the stack from bottom => top
   */
  toString() {
    return this.items.toString();
  }
}

export default Stack;
