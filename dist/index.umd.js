/*!
 * [libraryName] v0.0.0
 * (c) [authorFullName]
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["[libraryCamelCaseName]"] = {}));
})(this, (function (exports) { 'use strict';

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
  var isNumberParseable = function (value) {
      return !Number.isNaN(Number(value));
  };

  exports.isNumberParseable = isNumberParseable;

}));
//# sourceMappingURL=index.umd.js.map
