import { useTranslation } from 'react-i18next'
import styles from './article-details-page.module.scss'
import { memo } from 'react'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles')
  const { className } = props

  return <div className={styles.articleDetailsPage}>Article Details Page</div>
}

export default memo(ArticleDetailsPage)
