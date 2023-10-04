[libraryNameWithSpacesAndUpperCases]

# [libraryNameWithSpacesAndUpperCases]

## Table of contents

### Type Aliases

- [NumberParseable](README.md#numberparseable)

### Functions

- [isNumberParseable](README.md#isnumberparseable)

## Type Aliases

### NumberParseable

Ƭ **NumberParseable**: `number` \| `string` \| `boolean` & { `isNumberParseble`: unique `symbol`  }

A Branded Type for values parseable to number.

#### Defined in

[index.ts:4](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/c48c9c1/src/index.ts#L4)

## Functions

### isNumberParseable

▸ **isNumberParseable**(`value`): value is NumberParseable

Check if value is parseable to number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | An `unknown` value to be checked. |

#### Returns

value is NumberParseable

**`Example`**

```js
isNumberParseable('AAAA');
//=> false

isNumberParseable('100');
//=> true

if (!isNumberParseable(value))
  throw new Error('Value can\'t be parseable to `Number`.')
return Number(value);
```

#### Defined in

[index.ts:24](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/c48c9c1/src/index.ts#L24)
