import Node from "./Node";

class LinkedList {
  constructor() {
    this.head = null;

    this.tail = null;

    this.length = 0;
  }

  add(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    } else {
      this.tail.next = node;
      this.tail = node;
      return this;
    }
  }

  delete(value) {
    if (!this.head) return null;

    let deletedNode = null;

    /**
     * If deleted node is the head, set this.head to the node after the current this.head
     *
     * ie: shift this.head one node down
     */
    if (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let current = this.head;

    if (current !== null) {
      while (current.next) {
        // is the next node a match?
        if (current.next.value !== value) {
          // move up the linked list by 1
          current = current.next;
        } else {
          /**
           * We found a match!!
           */
          deletedNode = current.next;
          current.next = current.next.next;
        }
      }
    }
    // is the matched node the tail?
    if (value === this.tail.value) {
      this.tail = current;
    }

    return deletedNode;
  }

  async find(value, callback) {
    if (!this.head) return null;

    let currentNode = this.head;

    while (currentNode) {
      if (callback) {
        await callback(currentNode);
      }
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  deleteHead() {
    if (!this.head) return null;

    const deletedNode = this.head;

    //if the head is only node then clear the head/tail
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedNode;
  }

  deleteTail() {
    const deletedTail = this.tail;

    //only 1 node int he linked list?
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      //if next next node is null, then we know the currentNode.next is the tail
      //set currentNode.next to delete the tail node
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;
    while (currentNode) {
      nextNode = currentNode.next;

      currentNode.next = prevNode;

      prevNode = currentNode;
      currentNode = nextNode;
    }

    // Reset head and tail
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }

  toString() {
    const list = [];

    let currentNode = this.head;
    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list.toString();
  }

  toArray() {
    let currentNode = this.head;
    const linkedListArray = [];
    while (currentNode) {
      linkedListArray.push(currentNode);
      currentNode = currentNode.next;
    }
    return linkedListArray;
  }
}

export default LinkedList;
