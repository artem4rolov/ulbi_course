import { CSSProperties } from 'react'
import { classNames } from 'shared/helpers'

import classes from './skeleton.module.scss'

interface ISkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

export const Skeleton = (props: ISkeletonProps) => {
  const { border, className, height, width } = props

  const styles: CSSProperties = {
    height,
    width,
    borderRadius: border,
  }

  return (
    <div
      className={classNames(classes['skeleton-component'], {}, [className])}
      style={styles}
    />
  )
}
