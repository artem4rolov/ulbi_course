import styles from './[FTName].module.scss';

interface <FTName | camelcase>Props {
  className?: string
}

export const <FTName | camelcase> = (props: <FTName | camelcase>Props) => {
  const {className} = props

  return <div className={styles.<FTName | camelcase>}></div>;
};
