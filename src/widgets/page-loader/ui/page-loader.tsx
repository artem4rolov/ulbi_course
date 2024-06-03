import { Loader } from 'shared/ui/loader'
import styles from './page-loader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = (props: PageLoaderProps) => {
  const { className } = props

  return (
    <div className={styles['page-loader']}>
      <Loader />
    </div>
  )
}
