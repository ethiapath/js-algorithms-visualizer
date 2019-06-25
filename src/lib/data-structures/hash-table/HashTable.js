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

  /**
   * @param {*} key
   */
  delete(key) {
    //1. get hash of key
    const hash = this.hash(key);

    //2. delete key from keys
    const { [key]: deletedKeyHash, ...updatedKeys } = this.keys;
    this.keys = updatedKeys;

    //3. get bucket given the hash
    const bucket = this.buckets[hash];
    if (!bucket) return false;

    //4. if entry exists in the bucket, delete the entry from the array/bucket
    const entryIndex = bucket.findIndex(
      ({ key: currentKey }) => currentKey === key
    );
    if (entryIndex === -1) {
      return false;
    }

    //5. delete the entry from the bucket
    const entry = bucket[entryIndex];
    this.buckets[hash] = [
      ...bucket.slice(0, entryIndex),
      ...bucket.slice(entryIndex, bucket.length - 1)
    ];
    return entry;
  }

  /**
   *
   * @param {*} key
   */
  get(key) {
    //get the bucket given the hashed key
    const hash = this.hash(key);
    const bucket = this.buckets[hash];

    if (!bucket) return null;

    /**
     * find the entry given the key in the bucket
     *
     * It's possible that the bucket exists, but the entry/key may not exist in the bucket
     */
    const entry = bucket.find(({ key: currentKey }) => currentKey === key);
    if (entry) {
      return entry.value;
    }

    return entry ? entry.value : null;
  }

  /**
   *
   * @param {*} key
   */
  has(key) {
    return this.keys[key] ? true : false;
  }

  /**
   * @return {string[]}
   */
  getKeys() {
    return Object.keys(this.keys);
  }
}

export default HashTable;
