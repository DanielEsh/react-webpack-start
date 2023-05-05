export function objectToQuery(object: any) {
  const DELIMITER = '&'

  let paramString = ''

  for (const name in object) {
    if (!Array.isArray(object[name])) {
      paramString += `${name}=${object[name]}&`
    } else {
      paramString += `${name}=`
      object[name].forEach((val: any) => {
        if (val.toString() === 'true') {
          paramString += '1,'
        } else if (val.toString() === 'false') {
          paramString += '0,'
        } else {
          paramString += `${val},`
        }
      })

      paramString = paramString.slice(0, -1)
      paramString += DELIMITER
    }
  }
  paramString = paramString.slice(0, -1)
  return paramString
}
