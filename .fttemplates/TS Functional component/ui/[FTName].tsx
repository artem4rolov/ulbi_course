import styles from './[FTName].module.scss';

interface <FTName | kebabcase>Props {
  className?: string
}

export const <FTName | capitalize> = (props: <FTName | capitalize>Props) => {
  const {className} = props

  return <div className={styles.<FTName | capitalize>}></div>;
};
