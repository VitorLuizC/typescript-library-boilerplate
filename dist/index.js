/*!
 * [libraryName] v0.0.0
 * (c) [authorFullName]
 * Released under the MIT License.
 */

'use strict';

/**
 * Check if value is parseable to number.
 * @example
 * ```js
 * isNumberParseable('AAAA');
 * //=> false
 *
 * isNumberParseable('100');
 * //=> true
 *
 * if (!isNumberParseable(value))
 *   throw new Error('Value can\'t be parseable to `Number`.')
 * return Number(value);
 * ```
 * @param value - An `unknown` value to be checked.
 */
const isNumberParseable = (value) => !Number.isNaN(Number(value));

exports.isNumberParseable = isNumberParseable;
//# sourceMappingURL=index.js.map
