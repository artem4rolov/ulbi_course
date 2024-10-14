import {
  ArticleBlockType,
  ArticleSchema,
  ArticleTextBlock,
  ArticleView,
} from '../../model/types/article.types'
import {
  AppLink,
  AppLinkTheme,
  Avatar,
  Button,
  CardComponent,
  classNames,
  IconComponent,
  RouterPaths,
  Text,
  useHover,
} from 'shared'
import ViewsIcon from 'shared/assets/icons/eye.svg'
import { ButtonTheme } from 'shared/ui/button/button.types'
import { ArticleTextBlockComponent } from '../article-text-block-component/article-text-block-component'
import classes from './article-list-item.module.scss'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

interface ArticleListItemProps {
  className?: string
  article: ArticleSchema
  view: ArticleView
}

export const ArticleListItem = ({
  className,
  article,
  view,
}: ArticleListItemProps) => {
  const [isHover, bindHover] = useHover()
  const navigate = useNavigate()

  const onOpenArticle = useCallback(() => {
    navigate(`${RouterPaths.article_details}${article.id}`)
  }, [article.id, navigate])

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock

    return (
      <div
        className={classNames(classes['article-list-item'], {}, [
          className,
          classes[view],
        ])}
      >
        <CardComponent>
          <div className={classes['article-list-item-header']}>
            <div className={classes['article-list-item-header-user-block']}>
              <Avatar src={article.user.avatar} size={40} />
              <Text text={article.user.username} />
            </div>
            <Text text={article.createdAt} />
          </div>
          <Text
            title={article.title}
            className={classes['article-list-item-title']}
          />
          <Text
            text={article.type.join(', ')}
            className={classes['article-list-item-types']}
          />
          <img
            src={article.img}
            alt={article.title}
            className={classes['article-list-item-image']}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={classes['article-list-item-text-block']}
            />
          )}
          <div className={classes['article-list-item-footer']}>
            <AppLink
              theme={AppLinkTheme.USTYLED}
              to={`${RouterPaths.article_details}${article.id}`}
            >
              <Button
                theme={ButtonTheme.OUTLINE_INVERTED}
                onClick={onOpenArticle}
              >
                Читать далее...
              </Button>
            </AppLink>
            <div className={classes['article-list-item-footer-views']}>
              <Text text={String(article.views)} />
              <IconComponent Svg={ViewsIcon} />
            </div>
          </div>
        </CardComponent>
      </div>
    )
  }

  return (
    // @todo проверить стили для ссылки
    // <AppLink theme={AppLinkTheme.USTYLED}
    // to={`${RouterPaths.article_details}${article.id}`}
    <div
      {...bindHover}
      className={classNames(classes['article-list-item'], {}, [
        className,
        classes[view],
      ])}
    >
      <CardComponent onClick={onOpenArticle}>
        <div className={classes['article-list-item-image-wrapper']}>
          <img
            className={classes['article-list-item-image']}
            src={article.img}
            alt="article image card"
          />
          <Text
            text={article.createdAt}
            className={classes['article-list-item-date']}
          />
        </div>
        <div className={classes['article-list-item-info-wrapper']}>
          <div className={classes['article-list-item-info-wrapper-top-block']}>
            <Text
              text={article.type.join(', ')}
              className={
                classes['article-list-item-info-wrapper-top-block-types']
              }
            />
            <div
              className={
                classes['article-list-item-info-wrapper-top-block-views']
              }
            >
              <Text text={String(article.views)} />
              <IconComponent Svg={ViewsIcon} />
            </div>
          </div>
          <Text
            title={article.title}
            className={classes['article-list-item-info-title']}
          />
        </div>
      </CardComponent>
    </div>
  )
}
