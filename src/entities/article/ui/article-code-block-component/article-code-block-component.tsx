import { ArticleCodeBlock } from '../../model/types/article.types'
import { memo } from 'react'
import { classNames, CodeComponent } from 'shared'

import classes from './article-code-block-component.module.scss'

interface IArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(
  ({ className, block }: IArticleCodeBlockComponentProps) => {
    return (
      <div
        className={classNames(classes['article-code-block'], {}, [className])}
      >
        <CodeComponent text={block.code} />
      </div>
    )
  },
)
