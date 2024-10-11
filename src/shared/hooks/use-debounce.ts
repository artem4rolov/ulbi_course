import { MutableRefObject, useCallback, useRef } from 'react'

// any потому что неизвестно, какой колбэк и какие аргументы будут на входе
export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timer = useRef() as unknown as MutableRefObject<any>

  return useCallback(
    (...args: any[]) => {
      // вызываем callback из аргументов только когда ref = false
      if (timer.current) {
        clearTimeout(timer.current)
      }
      timer.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay],
  )
}
