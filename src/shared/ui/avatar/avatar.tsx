import { classNames, Mods } from 'shared/helpers'

import styles from './avatar.module.scss'
import { CSSProperties, useMemo } from 'react'

interface IAvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar = ({ className, src, size, alt }: IAvatarProps) => {
  const mods: Mods = {}

  const style = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100,
    }
  }, [size])

  return (
    <img
      src={src}
      style={styles}
      alt={alt}
      className={classNames(styles.avatar, mods, [className])}
    />
  )
}
