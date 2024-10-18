import { ArticleTextBlock } from '../../model/types/article.types'
import { memo } from 'react'
import { classNames, Text } from 'shared'

import classes from './article-text-block-component.module.scss'

interface IArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(
  ({ block, className }: IArticleTextBlockComponentProps) => {
    return (
      <div
        className={classNames(classes['article-text-block'], {}, [className])}
      >
        {block.title && (
          <Text
            className={classes['article-text-block-title']}
            title={block.title}
          />
        )}

        {block.paragraphs.map((paragraph, i) => (
          <Text
            key={paragraph}
            text={paragraph}
            className={classes['article-text-block-paragraph']}
          />
        ))}
      </div>
    )
  },
)
