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

  it("get(key) should return a previously set value given the key and null if key was never set", () => {
    const hashTable = new HashTable();

    expect(hashTable.get("foo")).toBeNull();

    hashTable.set("foo", "bar");
    expect(hashTable.get("foo")).toBe("bar");

    hashTable.set("abc", "123");
    expect(hashTable.get("abc")).toBe("123");

    //previous entry "foo" => "bar" should still exists
    expect(hashTable.get("foo")).toBe("bar");
  });

  it("delete(key) should return the deleted entry or false if entry does not exist in the HashTable", () => {
    const hashTable = new HashTable();

    expect(hashTable.delete("foo")).toBe(false);

    hashTable.set("foo", "bar");
    expect(hashTable.delete("foo")).toEqual({ key: "foo", value: "bar" });
    expect(hashTable.delete("foo")).toBe(false);
  });

  it("has(key) should return boolean indicating if key exists", () => {
    const hashTable = new HashTable();

    expect(hashTable.has("foo")).toBe(false);
    hashTable.set("foo", "bar");
    expect(hashTable.has("foo")).toBe(true);
    hashTable.delete("foo");
    expect(hashTable.has("foo")).toBe(false);
  });
});
