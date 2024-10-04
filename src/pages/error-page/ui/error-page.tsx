import { PageComponent } from 'widgets'
import styles from './error-page.module.scss'

interface ErrorPageProps {
  className?: string
}

export const ErrorPage = (props: ErrorPageProps) => {
  const { className } = props

  return (
    <PageComponent className={styles['error-page']}>
      <div>Что-то пошло не так, попробуйте перезагрузить страницу</div>
      <button onClick={() => window.location.reload()}>Перезагрузить</button>
    </PageComponent>
  )
}
