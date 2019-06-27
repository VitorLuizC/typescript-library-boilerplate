import test from 'ava';
import { isNumberParseable } from '../src';

test('isNumberParseable returns true for number parseable', context => {
  context.true(isNumberParseable('-7.5'));
  context.true(isNumberParseable(false));
  context.true(isNumberParseable(1892));
});

test('isNumberParseable returns false for non number parseable', context => {
  context.false(isNumberParseable('A8sa'));
  context.false(isNumberParseable({}));
  context.false(isNumberParseable(NaN));
});
