/**
 * Async sleep util fn
 *
 * returns a promise that resolvers after a given delay in miliseconds
 *
 * @return Promise
 */
const sleep = (delay = 0) => new Promise(resolve => setTimeout(resolve, delay));

export default sleep;
