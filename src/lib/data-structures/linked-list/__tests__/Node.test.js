import Node from "../Node";

describe("Linked List Node", () => {
  it("should create list node with value", () => {
    const node = new Node(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it("should be able to create list node with object as a value", () => {
    const nodeValue = { value: 1, key: "test" };
    const node = new Node(nodeValue);

    expect(node.value.value).toBe(1);
    expect(node.value.key).toBe("test");
    expect(node.next).toBeNull();
  });

  it("passing a node as the 2nd param when contructing a new node should link nodes together", () => {
    const node2 = new Node(2);
    const node1 = new Node(1, node2);

    expect(node1.next).toBeDefined();
    expect(node2.next).toBeNull();
    expect(node1.value).toBe(1);
    expect(node1.next.value).toBe(2);
  });
});
