import { ArticleImageBlock } from '../../model/types/article.types'
import { memo } from 'react'
import { classNames, Text, TextAlign } from 'shared'

import classes from './article-image-block-component.module.scss'

interface IArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(
  ({ className, block }: IArticleImageBlockComponentProps) => {
    return (
      <div
        className={classNames(classes['article-image-block'], {}, [className])}
      >
        <img
          alt={block.title}
          src={block.src}
          className={classes['article-image-block-source']}
        />
        {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
      </div>
    )
  },
)
