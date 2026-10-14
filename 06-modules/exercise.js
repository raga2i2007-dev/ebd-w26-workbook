
import shopName, { products, formatEGP } from "./catalog.js";

/**
 * How many products the catalog has.
 */
export function productCount() {
  return products.length;
}

/**
 * A price tag for one product.
 */
export function priceTag(product) {
  return formatEGP(product.price);
}

/**
 * A heading for the catalog page.
 */
export function shopHeading() {
  return `${shopName} catalog`;
}
