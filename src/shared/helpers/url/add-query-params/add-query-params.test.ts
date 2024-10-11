import { getQueryParams } from './add-query-params'

describe('add query params', function () {
  test('test with one param', () => {
    const params = getQueryParams({ test: 'value' })

    expect(params).toBe('?test=value')
  })

  test('test with multiple params', () => {
    const params = getQueryParams({ test: 'value', anotherParam: 'yooo' })

    expect(params).toBe('?test=value&anotherParam=yooo')
  })

  test('test with undefined params', () => {
    const params = getQueryParams({ test: 'value', anotherParam: undefined })

    expect(params).toBe('?test=value')
  })
})
