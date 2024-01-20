import { classNames } from 'shared';
import styles from './not-found-page.module.scss';

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = (props: NotFoundPageProps) => {
    const {className} = props

    return <div className={classNames(styles['not-found-page'], {}, [className])}>Page not found</div>;
};
