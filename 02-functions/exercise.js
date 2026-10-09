
/**
 * Greets someone by name.
 * greet("Ahmed") -> "Hello, Ahmed!"
 *
 * @param {string} name
 * @returns {string}
 */
export function greet(name) {
  return `Hello, ${name}!`;
}

/**
 * Doubles a number.
 * double(21) -> 42
 *
 * @param {number} n
 * @returns {number}
 */
export const double = (n) => n * 2;

/**
 * Takes a percentage off a price.
 * applyDiscount(320, 25) -> 240
 * applyDiscount(200, 10) -> 180
 *
 * @param {number} amount
 * @param {number} percent
 * @returns {number}
 */
export const applyDiscount = (amount, percent) => {
  return amount * (1 - percent / 100);
};

/**
 * Formats a price with a currency.
 * formatPrice(45) -> "45 EGP"
 * formatPrice(45, "USD") -> "45 USD"
 *
 * @param {number} amount
 * @param {string} currency
 * @returns {string}
 */
export const formatPrice = (amount, currency = "EGP") => {
  return `${amount} ${currency}`;
};

/**
 * Calls a function twice, passing the result of the first call
 * into the second call.
 *
 * applyTwice(double, 5) -> 20
 *
 * @param {Function} fn
 * @param {*} value
 * @returns {*}
 */
export function applyTwice(fn, value) {
  return fn(fn(value));
}
