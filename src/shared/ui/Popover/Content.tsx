import { useContext, PropsWithChildren } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'
import { PopoverContext } from './Context'
import { PopoverArrow } from './Arrow'

export const PopoverContent = (props: PropsWithChildren) => {
  const { floatingRef, popoverStyles, isOpened } = useContext(PopoverContext)

  return (
    <div>
      {isOpened ? (
        <Portal>
          <div
            ref={floatingRef}
            className="flex rounded-md bg-neutral-800 p-2 text-white"
            style={popoverStyles}
          >
            {props.children}

            <PopoverArrow />
          </div>
        </Portal>
      ) : null}
    </div>
  )
}
