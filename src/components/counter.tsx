import { useState } from "react";
import styles from "./counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.btn}>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </>
  );
};
