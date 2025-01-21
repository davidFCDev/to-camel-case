/**
 * Transform a string into CamelCase.
 * @param {string} text - The string to convert.
 * @returns {string} - The CamelCase string.
 */
function toCamelCase(text) {
  if (typeof text !== "string") {
    throw new Error("The argument must be a string");
  }

  return text
    .toLowerCase()
    .split(/[\s_-]+/) // the separator can be a space, underscore or hyphen
    .map((word, index) => {
      if (index === 0) return word; // the first word should be in lowercase
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

module.exports = toCamelCase;
