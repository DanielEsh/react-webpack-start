// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export function queryToObject(qs) {
  const obj = {}

  if (qs) {
    const params = qs.split('&')

    params.forEach((param) => {
      const name = param.split('=')[0]
      const value = param.split('=')[1]
      if (name && value) {
        if (Object.prototype.hasOwnProperty.call(obj, name)) {
          if (Array.isArray(obj[name])) {
            obj[name].push(value)
          } else {
            obj[name] = [obj[name], value]
          }
        } else {
          obj[name] = value
        }
      }
    })
  }
  return obj
}
