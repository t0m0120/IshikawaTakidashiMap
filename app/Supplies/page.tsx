"use client";
import { SentouMapView } from "@/components/PointsMapView/index";
import styles from "../page.module.css";

import supply from "../../points_data/supplies";
export default function Home() {
  return (
    <main className={styles.main} style={{margin: "10px",}}>
      <h2>
        支援物資拠点
      </h2>
      <p>1/3時点 20時点での情報です。</p>
      <p>ピンをタップした際に、表示される公式サイトのリンクなどで最新情報を確認してから行動してください。</p>
      <SentouMapView data={supply} />
    </main>
  );
}
