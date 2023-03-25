import { useEffect, useLayoutEffect } from 'react'
import { canUseDOM } from 'shared/utils/canUseDOM'

export const useIsomorphicLayoutEffect = canUseDOM()
  ? useLayoutEffect
  : useEffect
