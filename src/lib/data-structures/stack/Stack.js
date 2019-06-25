class Stack {
  constructor(items = []) {
    this.items = items;
  }

  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (this.isEmpty()) return null;
    const [lastItem] = this.items.slice(-1);
    return lastItem;
  }

  push(item) {
    this.items = [...this.items, item];
    return this.items;
  }

  pop() {
    return this.items.pop() || null;
  }

  toString() {
    return this.items.toString();
  }
}

export default Stack;
