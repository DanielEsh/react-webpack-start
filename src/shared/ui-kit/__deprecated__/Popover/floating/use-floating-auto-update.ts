import { useState, useEffect, type MutableRefObject } from 'react'
import { autoUpdate } from '@floating-ui/react-dom'
import { useDidUpdate } from 'shared/lib/hooks/use-did-update'
import { FloatingPosition } from './types'

interface Payload {
  opened: boolean
  floating: {
    update(): void
    refs: {
      floating: MutableRefObject<HTMLElement>
      reference: MutableRefObject<HTMLElement>
    }
  }
  positionDependencies: any[]
  position: FloatingPosition
}

export function useFloatingAutoUpdate({
  opened,
  floating,
  position,
  positionDependencies,
}: Payload) {
  const [delayedUpdate, setDelayedUpdate] = useState(0)

  useEffect(() => {
    if (floating.refs.reference.current && floating.refs.floating.current) {
      return autoUpdate(
        floating.refs.reference.current,
        floating.refs.floating.current,
        floating.update,
      )
    }

    return undefined
  }, [
    floating.refs.reference.current,
    floating.refs.floating.current,
    opened,
    delayedUpdate,
    position,
  ])

  useDidUpdate(() => {
    floating.update()
  }, positionDependencies)

  useDidUpdate(() => {
    setDelayedUpdate((c) => c + 1)
  }, [opened])
}
