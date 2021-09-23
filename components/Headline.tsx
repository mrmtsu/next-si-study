import styles from "../styles/Home.module.css";
import { HeadLineTitle } from "../types/type";

export const Headline = (props: HeadLineTitle) => {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>

      <p className={styles.description}>
        Get started by editing {props.children}
      </p>
    </div>
  );
};
