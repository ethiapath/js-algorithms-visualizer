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

  it("set(key, value) should push a key/value pair to the corresponding array given a hash", () => {
    const hashTable = new HashTable();

    hashTable.set("foo", "bar");

    /**
     * a bucket given the hash value of the key "foo" should
     *
     * 1. should not be null
     * 2. should be an array ie: bucket
     * 3. should have 1 entry {foo: "bar"}
     */
    const fooBucket = hashTable.buckets[hashTable.hash("foo")];
    expect(fooBucket).not.toBeNull();
    expect(Array.isArray(fooBucket)).toBe(true);
    expect(fooBucket.length).toBe(1);

    const entryIndex = fooBucket.findIndex(
      ({ key: currentKey }) => currentKey === "foo"
    );
    expect(entryIndex).not.toBe(-1);

    //test HashTable is keeping track of keys and a key's corresponding hash value
    expect(hashTable.keys["bar"]).toBe(undefined);
    expect(hashTable.keys["foo"]).toBe(hashTable.hash("foo"));
    hashTable.set("hello", "world");
    expect(hashTable.keys["hello"]).toBe(hashTable.hash("hello"));
  });
});
