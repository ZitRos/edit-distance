"use strict";

/**
 * Returns the Levenshtein distance between two words.
 * @param {string|Array} string1
 * @param {string|Array} string2
 * @returns {number}
 */
module.exports = function editDistance (string1, string2) {

	const current = [];

	for (let row = 0, temp, next; row < string2.length; ++row) {

		temp = row;

		for (let column = 0; column < string1.length; ++column) {

			next = row > 0 ? current[column] : column + 1;

			current[column] = string2[row] === string1[column]
				? temp
				: Math.min(
					temp,
					row > 0 ? current[column] : column + 1,
					row > 0 && column > 0 ? current[column - 1] : row + 1
				) + 1;

			temp = next;

		}

	}

	return current.length === 0 ? Math.max(string1.length, string2.length) : current[current.length - 1];

}