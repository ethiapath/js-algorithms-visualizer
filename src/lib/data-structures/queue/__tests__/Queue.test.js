import Queue from "../index";

describe("Queue", () => {
  it("newly initialized Queue should be empty", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });
});
