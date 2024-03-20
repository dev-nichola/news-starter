import styles from "./Container.module.css";

const Container = (props) => {
  const { children } = props;
  return <section className={styles.container}>{children}</section>;
};

export default Container;
