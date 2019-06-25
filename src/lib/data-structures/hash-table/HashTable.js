/**
 * Potential collisions are correlated w/ the size of the hash table
 *
 * We're going to cap the size at 32 to avoid collisions in the example. I believe
 * the hash algorithm would need to be adjusted based on the expected hash table size.
 */
const defaultSize = 32;

class HashTable {
  constructor(size = defaultSize) {
    this.buckets = Array(size)
      .fill()
      .map(() => []);

    this.keys = {};
  }

  /**
   * Some hashing algorithm to produce a unique key
   *
   * The uniqueness of the key is determined by the hashing algorithm
   *
   * @param {*} key
   */
  hash(key) {
    const hash = Array.from(key).reduce((acc, letter) => {
      /**
       * get the sum of the chracter code values for each letter in the key
       *
       * string.charCodeAt()
       * returns a number representing the UTF-16 code unit value of the character at the given index
       *
       * In this ex: the string = a letter, so we get the charCodeAt at index 0; index 1 would return NaN
       */
      return acc + letter.charCodeAt(0);
    }, 0);

    return hash % this.buckets.length;
  }

  /**
   *
   * @param {*} key
   * @param {*} value
   */
  set(key, value) {
    const hash = this.hash(key);

    //keep track of the keys and their corresponding hash value
    this.keys[key] = hash;

    const bucket = this.buckets[hash];

    //check if the key exists in the bucket
    const foundIndex = bucket.findIndex(
      ({ key: currentKey }) => currentKey === key
    );

    //update entry in bucket
    if (foundIndex !== -1) {
      bucket[foundIndex] = { key, value };
    } else {
      //add entry to bucket
      bucket.push({ key, value });
    }
  }

  delete(key) {}

  get(key) {}

  has(key) {}

  getKeys() {}
}

export default HashTable;
