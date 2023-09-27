export function splitThousands(number: number, separator = ' '): string {
  const tmp = number.toString().split('.')
  let value = tmp[0]
    .replace(/\D/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator)

  if (Number(tmp[1])) {
    value += `.${tmp[1]}`
  }

  return value
}
