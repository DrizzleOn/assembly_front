'use client'
import styles from "./page.module.css";
import LayoutControl from "./component/layoutControl";

export default function Home() {
  return (
    <div className={styles.page}>
      <LayoutControl noDisplay={[]}>
      </LayoutControl>
    </div>
  );
}
