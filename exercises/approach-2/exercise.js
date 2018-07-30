"use strict";

/*
 * 1. Write a function that throws an error if called with invalid arguments
 *
 * Fill in the body of the function `combinedLength`, which should return
 * the combined length of two arrays if it receives correct arguments, and
 * otherwise should throw an appropriate error.
 */

/**
 * Calculates the combined length of two arrays
 * @param   {Array} a First array
 * @param   {Array} b Second array
 * @returns {Number}  Combined length of a and b
 */
const combinedLength = (a, b) => {
  // CODE HERE
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new TypeError("Arguments must be arrays");
  }
  return a.concat(b).length;
};

/*
 * 2. Write a function that sums the numbers in an array and throws an error
 *    if called with invalid arguments
 *
 * Fill in the body of the function `sumArray`, which should return
 * the sum of all the elements in the input array. If it receives incorrect
 * arguments, it should throw an error.
 *
 * Note that all elements of the input array must be numbers.
 */

/**
 * Sums numbers in an array
 * @param   {Array} xs list of numbers
 * @returns {Number}   sum of list
 */
const sumArray = xs => {
  if (!Array.isArray(xs)) {
    throw new TypeError("Argument must be an array");
  }
  const isNum = xs.filter(i => typeof i !== "number");
  if (isNum.length > 0) {
    throw new TypeError("Array must be numbers");
  }
  return xs.reduce((a, v) => a + v, 0);
};

/*
 * 3. Write a function that catches errors thrown by (1) and (2)
 *
 * Fill in the body of the function `combineAndPrint`, which should find the
 * combined length of two arrays and the total sum of all their elements.
 * If an error occurs, the function should instead print a useful message
 * explaining what went wrong.
 */

/**
 * Returns a string of the format
 *   "Combined length: L; Combined sum of elements: S"
 * Where L is the combined length of the two arrays and S is the sum of the elements of the array
 *
 * The function should use `combinedLength`. In the case of invalid inputs, the
 * function should return the string
 *   "Invalid arguments: both arguments must be arrays"
 * @param   {Array}  a First array
 * @param   {Array}  b Second array
 * @returns {String}   Message about the combined arrays
 */
const combineAndPrint = (a, b) => {
  try {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      throw new TypeError("Both arguments must be arrays");
    }
    const L = combinedLength(a, b);
    const S = sumArray(a.concat(b));
    return `Combined length: ${L}; Combined sum of elements: ${S}`;
  } catch (e) {
    return "Invalid arguments: both arguments must be arrays";
  }
};

/*
 * **Stretch goal -- Harder -- Optional**
 *
 * 4. Write a function that wraps another function in try/catch
 *
 * Fill in the body of the function `wrapTryCatch`, which takes a function `fn1`
 * as an argument and returns another function `fn2` which wraps the first in
 * a try/catch statement.
 *
 * `fn2` should behave exactly like `fn1` except in the case where `fn1` throws an
 * error, in which case `fn2` should simply return `undefined`
 */

/**
 * Wraps given function in try/catch statement
 * @param  {Function} fn Function to wrap
 * @return {Function}    Wrapped function
 */
const wrapTryCatch = fn => (...args) => {
  try {
    if (!typeof fn === "function") {
      throw new TypeError("fn1 must be a function");
    }
    return fn(...args);
  } catch (e) {
    return undefined;
  }
};

module.exports = {
  combinedLength,
  sumArray,
  combineAndPrint,
  wrapTryCatch
};
