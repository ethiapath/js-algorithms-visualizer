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
});
