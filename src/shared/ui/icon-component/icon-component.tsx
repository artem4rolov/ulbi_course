import { FC, memo, SVGProps } from 'react'
import { classNames } from 'shared'

import classes from './icon-component.module.scss'

interface IconProps {
  className?: string
  Svg: FC<SVGProps<SVGSVGElement>>
}

export const IconComponent = memo(({ Svg, className }: IconProps) => {
  return (
    <Svg className={classNames(classes['icon-component'], {}, [className])} />
  )
})
