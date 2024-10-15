import { getArticleDetailsData } from 'entities/article'
import { getAuthData } from 'entities/user'
import { canUserEditArticle } from '../../model/selectors/article-selector'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, classNames, RouterPaths } from 'shared'
import { ButtonTheme } from 'shared/ui/button/button.types'
import classes from './article-details-page-header.module.scss'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
  const { className } = props

  const navigate = useNavigate()
  const canEdit = useSelector(canUserEditArticle)
  const articleData = useSelector(getArticleDetailsData)

  const onBackToListArticle = useCallback(() => {
    navigate(`${RouterPaths.articles}`)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(`${RouterPaths.article_details}${articleData?.id}/edit`)
  }, [navigate, articleData?.id])

  return (
    <div
      className={classNames(classes['article-details-page-header'], {}, [
        className,
      ])}
    >
      <Button
        theme={ButtonTheme.OUTLINE_INVERTED}
        onClick={onBackToListArticle}
      >
        Назад к списку статей
      </Button>
      {canEdit && (
        <Button theme={ButtonTheme.OUTLINE_INVERTED} onClick={onEditArticle}>
          Редактировать
        </Button>
      )}
    </div>
  )
}

export default ArticleDetailsPageHeader
