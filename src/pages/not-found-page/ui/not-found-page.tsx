import { useTranslation } from 'react-i18next'
import { classNames, PageComponent } from 'shared'
import styles from './not-found-page.module.scss'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = (props: NotFoundPageProps) => {
  const { t } = useTranslation('not-found-page')

  const { className } = props

  return (
    <PageComponent
      className={classNames(styles['not-found-page'], {}, [className])}
    >
      {t('notFoundPage')}
    </PageComponent>
  )
}
