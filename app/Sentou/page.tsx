"use client";
import { SentouMapView } from "@/components/PointsMapView/index";
import styles from "../page.module.css";

import sentou from "../../points_data/sentou";
import Link from "@/node_modules/next/link";
export default function Home() {
  return (
    <main className={styles.main}>
      <h3 style={{ margin: "10px", textAlign: "left" }}>
        営業している銭湯マップ
      </h3>
      <p>
        富山県浴場組合加入の公衆浴場のうち、災害の影響はひかりランド小矢部のみ休業中とのこと<br/>
        富山県のピンを非表示にしました。<br/>
        <Link href="https://twitter.com/toyama_sento/status/1743544184739659958">
          富山県浴場組合より
        </Link>
      </p>
      <SentouMapView data={sentou} />
    </main>
  );
}
