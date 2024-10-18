import { ArticleView } from '../../model/types/article.types'
import { useCallback } from 'react'
import { Button, classNames, IconComponent } from 'shared'
import ListIcon from 'shared/assets/icons/list.svg'
import TiledIcon from 'shared/assets/icons/tiled.svg'
import { ButtonTheme } from 'shared/ui/button/button.types'

import classes from './article-view-selector.module.scss'

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick: (view: ArticleView) => void
}

const viewTypes = [
  { view: ArticleView.BIG, icon: ListIcon },
  { view: ArticleView.SMALL, icon: TiledIcon },
]

export const ArticleViewSelector = ({
  onViewClick,
  view,
  className,
}: ArticleViewSelectorProps) => {
  // пока не понял, зачем так делать
  const onViewCLick = (view: ArticleView) => () => {
    onViewClick(view)
  }

  return (
    <div
      className={classNames(classes['article-view-selector'], {}, [className])}
    >
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onViewCLick(viewType.view)}
          className={classNames('', {
            [classes['not-selected']]: viewType.view !== view,
          })}
        >
          <IconComponent Svg={viewType.icon} />
        </Button>
      ))}
    </div>
  )
}
