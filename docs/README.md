[libraryNameWithSpacesAndUpperCases]

# [libraryNameWithSpacesAndUpperCases]

## Table of contents

### Type aliases

- [NumberParseable](README.md#numberparseable)

### Functions

- [isNumberParseable](README.md#isnumberparseable)

## Type aliases

### NumberParseable

Ƭ **NumberParseable**: *number* \| *string* \| *boolean* & { `isNumberParseble`: unique *symbol*  }

A Branded Type for values parseable to number.

Defined in: [index.ts:4](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/af1fd23/src/index.ts#L4)

## Functions

### isNumberParseable

▸ `Const`**isNumberParseable**(`value`: *unknown*): value is string \| number \| boolean & object

Check if value is parseable to number.

**`example`** ```ts
isNumberParseable('AAAA');
//=> false

isNumberParseable('100');
//=> true

if (!isNumberParseable(value))
  throw new Error('Value can\'t be parseable to `Number`.')
return Number(value);
```
@param value - An `unknown` value to be checked.

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *unknown* |

**Returns:** value is string \| number \| boolean & object

Defined in: [index.ts:23](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/af1fd23/src/index.ts#L23)
