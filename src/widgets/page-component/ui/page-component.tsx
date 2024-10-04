import { StateSchema } from 'app'
import { getUIScrollByPath, uiSaveScrollActions } from 'features/ui-save-scroll'
import {
  memo,
  MutableRefObject,
  PropsWithChildren,
  UIEvent,
  useEffect,
  useRef,
} from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useInfiniteScroll, useThrottle } from 'shared'
import { classNames } from 'shared/helpers'

import classes from './page-component.module.scss'

interface PageComponentProps extends PropsWithChildren {
  className?: string
  onScrollEnd?: () => void
}

export const PageComponent = memo(
  ({ className, children, onScrollEnd }: PageComponentProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useSelector((state: StateSchema) =>
      getUIScrollByPath(state, pathname),
    )

    useEffect(() => {
      // возвращаемся на тот уровень скролла, с которого мы размонтировали страницу
      wrapperRef.current.scrollTop = scrollPosition
    }, [])

    useInfiniteScroll({
      wrapperRef,
      triggerRef,
      callback: onScrollEnd,
    })

    const onScrollHandler = useThrottle((event: UIEvent<HTMLElement>) => {
      dispatch(
        uiSaveScrollActions.setScroll({
          path: pathname,
          position: event.currentTarget.scrollTop,
        }),
      )
    }, 700)

    return (
      <section
        ref={wrapperRef}
        onScroll={onScrollHandler}
        className={classNames(classes['page-component'], {}, [className])}
      >
        {children}
        <div ref={triggerRef} />
      </section>
    )
  },
)
