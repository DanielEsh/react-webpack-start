import { ReactNode, useRef, useState, MouseEvent, useContext } from 'react'
import { classNames } from 'shared/utils'
import { useEventListener } from '../../hooks/useEventListener'
import { RippleContext, RippleContextType } from './RippleContext'
import { RippleContainer } from 'shared/ui/Ripple/RippleContainer'

import {
  getOffset,
  getHeight,
  getWidth,
  getOuterHeight,
  getOuterWidth,
} from 'shared/utils/dom'

export type RippleProps = {
  className?: string
  children?: ReactNode
}

// const addClass = (element: any, className: string) => {
//   if (element && className) {
//     if (element.classList) element.classList.add(className)
//     else element.className += ' ' + className
//   }
// }

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

export const RippleRoot = ({ className }: RippleProps) => {
  const [effect, setEffect] = useState(false)
  const rippleRef = useRef<HTMLElement | null>(null)

  const getTargetElement = () => {
    return rippleRef.current && rippleRef.current.parentElement
  }

  const { containerRef } = useContext<RippleContextType>(RippleContext)

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
    if (!rippleRef.current || !containerRef?.current) {
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

  useEventListener('mousedown', onMouseDown)

  // useEffect(() => {
  //   targetRef.current = getTargetElement()
  // }, [])

  const onAnimationEnd = () => {
    setEffect(false)
  }

  const classes = classNames(
    'ripple-effect absolute block rounded-full',
    className,
    {
      'animate-ripple': effect,
    },
  )

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
