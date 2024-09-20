[**[libraryNameWithSpacesAndUpperCases]**](../README.md) • **Docs**

***

[[libraryNameWithSpacesAndUpperCases]](../README.md) / isNumberParseable

# Function: isNumberParseable()

> **isNumberParseable**(`value`): `value is NumberParseable`

Check if value is parseable to number.

## Parameters

• **value**: `unknown`

An `unknown` value to be checked.

## Returns

`value is NumberParseable`

## Example

```js
isNumberParseable('AAAA');
//=> false

isNumberParseable('100');
//=> true

if (!isNumberParseable(value))
  throw new Error('Value can\'t be parseable to `Number`.')
return Number(value);
```

## Defined in

[index.ts:24](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/7ffcc2c186f5de3d3542411bd6552bb931854097/src/index.ts#L24)
