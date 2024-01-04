"use client";
import { SentouMapView } from "@/components/PointsMapView/index";
import styles from "../../styles/page.module.css";

import sentou from "../../points_data/sentou";
export default function Home() {
  return (
    <main className={styles.main}>
      <h3 style={{ margin: "10px", textAlign: "left" }}>
        営業している銭湯マップ
      </h3>
      <SentouMapView data={sentou} />
    </main>
  );
}
