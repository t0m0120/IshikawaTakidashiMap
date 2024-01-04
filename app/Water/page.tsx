"use client";
import { SentouMapView } from "@/components/PointsMapView/index";
import styles from "../../styles/page.module.css";

import water_supply from "../../points_data/water_supply";
export default function Home() {
  return (
    <main className={styles.main} style={{margin: "10px",}}>
      <h2>
        給水情報マップ
      </h2>
      <p>1/3時点 14時点での情報です。</p>
      <p>ピンをタップした際に、表示される公式サイトのリンクなどで最新情報を確認してから行動してください。</p>
      <SentouMapView data={water_supply} />
    </main>
  );
}
