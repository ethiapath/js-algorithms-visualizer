import Queue from "../index";

describe("Queue", () => {
  it("newly initialized Queue should be empty", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  it("enqueue() should add item to the end of the line", () => {
    const queue = new Queue();

    queue.enqueue("a");
    expect(queue.toString()).toBe("a");

    queue.enqueue("b");
    queue.enqueue("c");
    expect(queue.toString()).toBe("a,b,c");
  });

  it("dequeue() should remove item from the front of the line", () => {
    const queue = new Queue();

    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    expect(queue.toString()).toBe("a,b,c");

    queue.dequeue();
    expect(queue.toString()).toBe("b,c");
    queue.dequeue();
    expect(queue.toString()).toBe("c");
    queue.dequeue();
    expect(queue.toString()).toBe("");
  });

  it("peek() should return the next item in line w/o modifyinng the queue", () => {
    const queue = new Queue();

    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");

    expect(queue.toString()).toBe("a,b,c");

    expect(queue.peek()).toBe("a");

    queue.dequeue();
    expect(queue.peek()).toBe("b");

    queue.enqueue("d");
    expect(queue.peek()).toBe("b");

    queue.dequeue();
    queue.dequeue();
    expect(queue.peek()).toBe("d");
  });
});
