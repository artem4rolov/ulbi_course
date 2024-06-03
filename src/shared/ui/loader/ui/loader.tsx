import { classNames } from 'shared/helpers'
import './loader.scss'

interface LoaderProps {
  className?: string
}

export const Loader = (props: LoaderProps) => {
  const { className } = props

  return (
    <div className={classNames('lds-ellipsis', {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
