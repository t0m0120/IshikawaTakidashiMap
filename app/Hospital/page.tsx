"use client";
import { SentouMapView } from "@/components/PointsMapView/index";
import styles from "../page.module.css";

import hospital from "../../points_data/hospital";
export default function Home() {
    return (
        <main className={styles.main}>
            <h3 style={{ margin: "10px", textAlign: "left" }}>
                営業している医療機関マップ
            </h3>
            <SentouMapView data={hospital} />
        </main>
    );
}
