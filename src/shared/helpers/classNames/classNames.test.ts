import { classNames } from './classNames'

test('тест функции classNames с одним аргументом', () => {
  const expected = 'className'
  expect(classNames('className', {}, [])).toBe(expected)
})
test('тест функции classNames с одним аргументом и массивом additional', () => {
  const expected = 'className class1 class2'
  expect(classNames('className', {}, ['class1', 'class2'])).toBe(expected)
})
test('тест функции classNames с одним аргументом, условными классами (2 true) и массивом additional', () => {
  const expected = 'className class1 class2 hovered scrollable'
  expect(
    classNames('className', { hovered: true, scrollable: true }, [
      'class1',
      'class2',
    ]),
  ).toBe(expected)
})
test('тест функции classNames с одним аргументом, условными классами (1 false, 1 true) и массивом additional', () => {
  const expected = 'className class1 class2 hovered'
  expect(
    classNames('className', { hovered: true, scrollable: false }, [
      'class1',
      'class2',
    ]),
  ).toBe(expected)
})
test('тест функции classNames с одним аргументом, условными классами (1 undefined, 1 true) и массивом additional', () => {
  const expected = 'className class1 class2 hovered'
  expect(
    classNames('className', { hovered: true, scrollable: undefined }, [
      'class1',
      'class2',
    ]),
  ).toBe(expected)
})
test('тест функции classNames с одним аргументом, условными классами (1 null, 1 true) и массивом additional', () => {
  const expected = 'className class1 class2 hovered'
  expect(
    classNames('className', { hovered: true, scrollable: null }, [
      'class1',
      'class2',
    ]),
  ).toBe(expected)
})
