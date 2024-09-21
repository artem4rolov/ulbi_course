import { memo } from 'react'
import styles from './articles-page.module.scss'
import { useTranslation } from 'react-i18next'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { t } = useTranslation('articles')
  const { className } = props

  return <div className={styles.articlesPage}>Articles page</div>
}

export default memo(ArticlesPage)
