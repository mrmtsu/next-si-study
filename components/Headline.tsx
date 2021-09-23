import classes from "../components/Headline.module.css";
import { HeadLineTitle } from "../types/type";

export const Headline = (props: HeadLineTitle) => {
  return (
    <div>
      <h1 className={classes.title}>{props.page} page</h1>

      <p className={classes.description}>
        Get started by editing {props.children}
      </p>
    </div>
  );
};
