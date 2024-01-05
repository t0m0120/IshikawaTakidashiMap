"use client";
import { SentouMapView } from "@/components/PointsMapView/index";
import styles from "../page.module.css";

import hospital from "../../points_data/hospital";
export default function Home() {
    return (
        <main className={styles.main}>
            <div style={{ margin: "10px", textAlign: "left" }}>
                <h3>
                    営業している医療機関マップ
                </h3>
                <p>
                    最新の情報は<a href="https://www.hokkoku.co.jp/articles/-/1279689">こちら</a>をご確認ください。<br />
                </p>
            </div>
            <SentouMapView data={hospital} />
        </main>
    );
}
