import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import classes from "../components/Main.module.css";
import { HeadLineTitle } from "../types/type";

export const Main = (props: HeadLineTitle) => {
  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
};
