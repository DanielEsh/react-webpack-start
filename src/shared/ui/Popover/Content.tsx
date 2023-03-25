import { useContext, PropsWithChildren } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'
import { PopoverContext } from './Context'
import { PopoverArrow } from './Arrow'
import { motion, AnimatePresence } from 'framer-motion'

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

export const PopoverContent = (props: PropsWithChildren) => {
  const {
    floatingRef,
    onFloatingEnter,
    onFloatingLeave,
    popoverStyles,
    isOpened,
    portalNode,
  } = useContext(PopoverContext)

  return (
    <AnimatePresence>
      {isOpened ? (
        <Portal container={portalNode}>
          <motion.div
            ref={floatingRef}
            className="flex rounded-md bg-neutral-800 p-2 text-white"
            style={popoverStyles}
            variants={fade}
            {...fade}
            onMouseEnter={onFloatingEnter}
            onMouseLeave={onFloatingLeave}
          >
            {props.children}

            <PopoverArrow />
          </motion.div>
        </Portal>
      ) : null}
    </AnimatePresence>
  )
}
