import LinkedList from "../index";

describe("LinkedList", () => {
  it("should create empty linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe("");
  });

  it("add() should add node to linked list", () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.add(1);
    linkedList.add(2);

    expect(linkedList.toString()).toBe("1,2");
    expect(linkedList.tail.next).toBeNull();
  });

  it("delete() should delete node from linked list", () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    expect(linkedList.tail.value).toBe(3);

    linkedList.delete(2);
    expect(linkedList.tail.value).toBe(3);
    linkedList.delete(3);
    expect(linkedList.tail.value).toBe(1);
    linkedList.delete(1);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it("find() should find node from linked list", async () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    const found4 = await linkedList.find(4);
    const found2 = await linkedList.find(2);
    const found1 = await linkedList.find(1);
    expect(found4).toBeNull();
    expect(found2.value).toBe(2);
    expect(found1.value).toBe(1);
  });

  it("deleteTail() should update tail to the node before the tail", () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    expect(linkedList.tail.value).toBe(3);

    linkedList.deleteTail();

    expect(linkedList.tail.value).toBe(2);
  });

  it("deleteHead() should update the head to next node", () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    expect(linkedList.head.value).toBe(1);
    linkedList.deleteHead();
    expect(linkedList.head.value).toBe(2);
  });

  it("reverse() should update head/tail properties and reverse each node's .next references", () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(3);
    expect(linkedList.head.next.value).toBe(2);

    linkedList.reverse();

    expect(linkedList.head.value).toBe(3);
    expect(linkedList.tail.value).toBe(1);
  });
});
