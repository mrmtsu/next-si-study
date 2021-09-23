import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import styles from "../styles/Home.module.css";
import { HeadLineTitle } from "../types/type";

export const Main = (props: HeadLineTitle) => {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
};
