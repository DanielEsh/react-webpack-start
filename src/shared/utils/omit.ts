export function omit(obj: any, keyToOmit: string[]) {
  const newObject = { ...obj }

  keyToOmit.forEach((key) => {
    if (key in newObject) {
      delete newObject[key]
    }
  })

  return newObject
}
