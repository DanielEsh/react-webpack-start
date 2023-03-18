// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { ReactNode, useRef, useState, MouseEvent, useContext } from 'react'
import { classNames } from 'shared/utils'
import { useEventListener } from '../../hooks/useEventListener'
import { RippleContext, RippleContextType } from './RippleContext'
import { RippleContainer } from 'shared/ui/Ripple/RippleContainer'

export type RippleProps = {
  className?: string
  children?: ReactNode
}

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

const addClass = (element: any, className: string) => {
  if (element && className) {
    if (element.classList) element.classList.add(className)
    else element.className += ' ' + className
  }
}

const removeClass = (element: any, className: string) => {
  if (element && className) {
    if (element.classList) element.classList.remove(className)
    else
      element.className = element.className.replace(
        new RegExp(
          '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)',
          'gi',
        ),
        ' ',
      )
  }
}

export const RippleRoot = ({ children }: RippleProps) => {
  const [effect, setEffect] = useState(false)
  const rippleRef = useRef<HTMLElement | null>(null)

  const getTargetElement = () => {
    return rippleRef.current && rippleRef.current.parentElement
  }

  const { color, containerRef } = useContext<RippleContextType>(RippleContext)

  const onMouseDown = (event: MouseEvent) => {
    if (!containerRef?.current) return

    if (event.target !== getTargetElement()) {
      return
    }

    const offset = getOffset(containerRef.current)
    const offsetX =
      event.pageX -
      offset.left +
      document.body.scrollTop -
      getWidth(rippleRef.current) / 2
    const offsetY =
      event.pageY -
      offset.top +
      document.body.scrollLeft -
      getHeight(rippleRef.current) / 2

    activateRipple(offsetX, offsetY)
  }

  const activateRipple = (offsetX: number, offsetY: number) => {
    if (!rippleRef.current && !containerRef?.current) {
      return
    }

    removeClass(rippleRef.current, 'animate-ripple')

    if (!getHeight(rippleRef.current) && !getWidth(rippleRef.current)) {
      const maxRippleValue = Math.max(
        getOuterWidth(containerRef.current),
        getOuterHeight(containerRef.current),
      )

      rippleRef.current.style.height = `${maxRippleValue}px`
      rippleRef.current.style.width = `${maxRippleValue}px`
    }

    rippleRef.current.style.top = offsetY + 'px'
    rippleRef.current.style.left = offsetX + 'px'

    setEffect(true)
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useEventListener('mousedown', onMouseDown)

  // useEffect(() => {
  //   targetRef.current = getTargetElement()
  // }, [])

  const onAnimationEnd = () => {
    setEffect(false)
  }

  const classes = classNames('ripple-effect absolute block rounded-full', {
    'animate-ripple': effect,
  })

  return (
    <span
      role="presentation"
      ref={rippleRef}
      className={classes}
      onAnimationEnd={onAnimationEnd}
    />
  )
}

export const Ripple = Object.assign(RippleRoot, {
  Container: RippleContainer,
})
