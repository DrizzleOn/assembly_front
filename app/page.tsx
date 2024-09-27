'use client'
import styles from "./page.module.css";
import LayoutControl from "./component/layoutControl";
import Card from "./component/cardUi";
import cardStyle from './component/card.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <LayoutControl noDisplay={[]}>
        <main className={`${styles.main} flex_center`}>
          <div className={`${cardStyle.cardBox} content`}>
            <h3 className={`${styles.cardLength}`}>
                총 200개
            </h3>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </main>
      </LayoutControl>
    </div>
  );
}
