import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/article'
import { memo } from 'react'

import styles from './article-details-page.module.scss'
import { useParams } from 'react-router-dom'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles')
  const { id } = useParams<{ id: string }>()
  const { className } = props

  if (!id) {
    return (
      <div className={styles.articleDetailsPage}>{t('Статья не найдена')}</div>
    )
  }

  return (
    <div className={styles.articleDetailsPage}>
      <ArticleDetails id={id} />
    </div>
  )
}

export default memo(ArticleDetailsPage)
