import React, { PropsWithChildren } from 'react'
import { classNames } from 'shared/helpers'

import classes from './flex.module.scss'

export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '8' | '16' | '32'

const justifyClasses: Record<FlexJustify, string> = {
  start: classes.justifyStart,
  center: classes.justifyCenter,
  end: classes.justifyEnd,
  between: classes.justifyBetween,
  around: classes.justifyAround,
}

const alignClasses: Record<FlexAlign, string> = {
  start: classes.alignStart,
  center: classes.alignCenter,
  end: classes.alignEnd,
}

const directionClasses: Record<FlexDirection, string> = {
  row: classes.directionRow,
  column: classes.directionColumn,
}

const gapClasses: Record<FlexGap, string> = {
  '4': classes.gap4,
  '8': classes.gap8,
  '16': classes.gap16,
  '32': classes.gap32,
}

export interface FlexProps extends PropsWithChildren {
  className?: string
  justify?: FlexJustify
  align?: FlexAlign
  direction?: FlexDirection
  gap?: FlexGap
  max?: boolean
}

export const Flex = ({
  children,
  className,
  justify = 'start',
  align = 'center',
  direction = 'row',
  gap = '4',
  max = true,
}: FlexProps) => {
  const configClasses = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gapClasses[gap],
    max ? classes.max : '',
  ]

  return (
    <div className={classNames(classes.flex, {}, configClasses)}>
      {children}
    </div>
  )
}
