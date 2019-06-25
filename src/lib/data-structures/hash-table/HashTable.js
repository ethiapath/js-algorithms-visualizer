/**
 * Potential collisions are correlated w/ the size of the hash table
 *
 * We're going to cap the size at 32 to avoid collisions in the example. I believe
 * the hash algorithm would need to be adjusted based on the expected hash table size.
 */
const defaultSize = 32;

class HashTable {
  constructor(size = defaultSize) {
    this.buckets = Array(size).fill(null);

    this.keys = {};
  }

  hash(key) {}

  set(key, value) {}

  delete(key) {}

  get(key) {}

  has(key) {}

  getKeys() {}
}

export default HashTable;
