import HashTable from "../HashTable";

describe("HashTable", () => {
  it("should have a default bucket size of 32", () => {
    const hashTable = new HashTable();
    expect(hashTable.buckets.length).toBe(32);
  });

  it("bucket length should match the size param passed when instantiating", () => {
    const hashTable1 = new HashTable(10);
    expect(hashTable1.buckets.length).toBe(10);

    const hashTable2 = new HashTable(140);
    expect(hashTable2.buckets.length).toBe(140);

    const hashTable3 = new HashTable(3120);
    expect(hashTable3.buckets.length).toBe(3120);
  });

  it("hash(key) should take a string and return a hash number", () => {
    const hashTable = new HashTable();

    expect(hashTable.hash("a")).toBe(1);
    expect(hashTable.hash("b")).toBe(2);
    expect(hashTable.hash("abc")).toBe(6);
    expect(hashTable.hash("sasdfsd")).toBe(8);
  });
});
