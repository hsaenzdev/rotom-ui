/**
 * Transforms a numerical value to a metric representation.
 * @param {number} value - The numerical value to transform.
 * @returns {string} The metric representation with one decimal place.
 */
export const transformToMetric = (value: number): string =>
  (value / 10).toFixed(1).replace(".", ",");
