import { memo, MutableRefObject, PropsWithChildren, useRef } from 'react'
import { useInfiniteScroll } from 'shared'
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

    useInfiniteScroll({
      wrapperRef,
      triggerRef,
      callback: onScrollEnd,
    })

    return (
      <section
        ref={wrapperRef}
        className={classNames(classes['page-component'], {}, [className])}
      >
        {children}
        <div ref={triggerRef} />
      </section>
    )
  },
)
