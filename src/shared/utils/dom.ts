export const getOffset = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect()

  return {
    top:
      rect.top +
      (window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0),
    left:
      rect.left +
      (window.screenX ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft ||
        0),
  }
}

export const getOuterWidth = (element: HTMLElement | null) =>
  element ? element.offsetWidth || element.getBoundingClientRect().width : 0

export const getOuterHeight = (element: HTMLElement | null) =>
  element ? element.offsetHeight || element.getBoundingClientRect().height : 0

export const getHeight = (element: HTMLElement | null) => {
  if (!element) return 0
  let height = element.offsetHeight
  const style = getComputedStyle(element)

  height -=
    parseFloat(style.paddingTop) +
    parseFloat(style.paddingBottom) +
    parseFloat(style.borderTopWidth) +
    parseFloat(style.borderBottomWidth)

  return height
}

export const getWidth = (element: HTMLElement | null) => {
  if (!element) return 0
  let width = element.offsetWidth
  const style = getComputedStyle(element)

  width -=
    parseFloat(style.paddingLeft) +
    parseFloat(style.paddingRight) +
    parseFloat(style.borderLeftWidth) +
    parseFloat(style.borderRightWidth)

  return width
}
