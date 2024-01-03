"use client";
import { SentouMapView } from "@/components/PointsMapView/index";
import styles from "../page.module.css";

import water_supply from "../../points_data/water_supply";
export default function Home() {
  return (
    <main className={styles.main}>
      <h3 style={{ margin: "10px", textAlign: "left" }}>
        給水情報マップ
      </h3>
      <SentouMapView data={water_supply} />
    </main>
  );
}
