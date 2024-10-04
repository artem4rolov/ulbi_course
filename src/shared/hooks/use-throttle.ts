import { useCallback, useRef } from 'react'

// any потому что неизвестно, какой колбэк и какие аргументы будут на входе
export function useThrottle(callback: (...args: any) => void, delay: number) {
  const throttleRef = useRef(false)

  return useCallback(
    (...args: any) => {
      // вызываем callback из аргументов только когда ref = false
      if (!throttleRef.current) {
        callback(...args)
        throttleRef.current = true

        // следующий колбэк выполнится только через заданное в аргументах время
        setTimeout(() => {
          throttleRef.current = false
        }, delay)
      }
    },
    [callback, delay],
  )
}
