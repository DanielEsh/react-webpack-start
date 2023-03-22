import { useContext, PropsWithChildren } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'
import { PopoverContext } from './Context'

export const PopoverContent = (props: PropsWithChildren) => {
  const { floatingRef, arrowRef, popoverStyles, arrowStyles, isOpened } =
    useContext(PopoverContext)

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

            <span
              ref={arrowRef}
              style={arrowStyles}
              className="absolute h-2 w-2 rotate-45 bg-neutral-800"
            />
          </div>
        </Portal>
      ) : null}
    </div>
  )
}
