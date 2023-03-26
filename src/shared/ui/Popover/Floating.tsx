import { useContext, forwardRef, useImperativeHandle, useRef } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'
import { PopoverContext } from './Context'
import { PopoverArrow } from './Arrow'
import { TypeWithChidlren } from './types'
import { motion, AnimatePresence } from 'framer-motion'
import { useComposedRefs } from 'shared/lib/hooks/useComposedRefs'

const fade = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
}

export const PopoverFloating = forwardRef<
  HTMLDivElement | null,
  TypeWithChidlren
>(({ children }, forwardedRef) => {
  const innerRef = useRef<any>(null)

  useImperativeHandle(forwardedRef, () => innerRef.current)

  const {
    floatingRef,
    onFloatingEnter,
    onFloatingLeave,
    popoverStyles,
    isOpened,
    portalNode,
  } = useContext(PopoverContext)

  const composedRef = useComposedRefs(innerRef, floatingRef)

  return (
    <AnimatePresence>
      {isOpened ? (
        <Portal container={portalNode}>
          <motion.div
            ref={composedRef}
            style={popoverStyles}
            variants={fade}
            {...fade}
            onMouseEnter={onFloatingEnter}
            onMouseLeave={onFloatingLeave}
          >
            {children}

            <PopoverArrow />
          </motion.div>
        </Portal>
      ) : null}
    </AnimatePresence>
  )
})
