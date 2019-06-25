import Stack from "../Stack";

describe("Stack", () => {
  it("should initialize an empty stack", () => {
    const stack = new Stack();

    expect(stack.toString()).toBe("");
  });

  it("push() should add an item to the top of the stack", () => {
    const stack = new Stack();

    stack.push("a");
    expect(stack.peek()).toBe("a");
    stack.push("b");
    expect(stack.peek()).toBe("b");
  });

  it("peek() should return the last item in the stack without modifying the stack", () => {
    const stack = new Stack(["a"]);

    expect(stack.toString()).toBe("a");
    stack.push("b");
    expect(stack.toString()).toBe("a,b");
  });

  it("pop() should remove and return the last item in the stack", () => {
    const stack = new Stack(["a", "b", "c"]);

    expect(stack.pop()).toBe("c");
    expect(stack.pop()).toBe("b");
    expect(stack.pop()).toBe("a");
    expect(stack.pop()).toBeNull();
  });

  it("isEmpty() should return a boolean", () => {
    const stack = new Stack(["a", "b", "c"]);

    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);

    const emptyStack = new Stack();
    expect(emptyStack.isEmpty()).toBe(true);
  });
});
