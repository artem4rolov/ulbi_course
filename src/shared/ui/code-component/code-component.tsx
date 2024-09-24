import { PropsWithChildren, useCallback } from 'react'
import { classNames } from 'shared/helpers'
import { Button } from '../button'
import { ButtonTheme } from '../button/button.types'
import { IconComponent } from '../icon-component/icon-component'
import CopyIcon from '../../assets/icons/copy.svg'

import classes from './code-component.module.scss'

interface CodeComponent {
  className?: string
  text: string
}

export const CodeComponent = ({ text, className }: CodeComponent) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre>
      <code className={classNames(classes['code-component'], {}, [className])}>
        {text}
        <Button
          theme={ButtonTheme.CLEAR}
          className={classes['code-component-copy-btn']}
          onClick={onCopy}
        >
          {/* <IconComponent Svg={CopyIcon} /> */}
          <CopyIcon className={classes['code-component-copy-icon']} />
        </Button>
      </code>
    </pre>
  )
}
