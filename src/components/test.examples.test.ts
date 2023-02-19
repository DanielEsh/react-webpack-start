function sum(a: number, b: number) {
  return a + b
}

describe('example descript', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('test', () => {
    expect(true).toBe(true)
  })
})
