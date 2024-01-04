"use client";
import { SentouMapView } from "@/components/PointsMapView/index";
import styles from "../../styles/page.module.css";

import supply from "../../points_data/supplies";
import Link from "@/node_modules/next/link";
export default function Home() {
  return (
    <main style={{margin: "10px",}}>
      <h2>
        支援物資拠点
      </h2>
      <p>1/3時点 20時点での情報です。</p>
      <p>ピンをタップした際に、表示される公式サイトのリンクなどで最新情報を確認してから行動してください。</p>
      <p>七尾市 1/3 18:30 支援物資の配布終了<Link href="https://www.city.nanao.lg.jp/bosai/mail/20240103_25.html">七尾市公式</Link></p>
      <p>七尾市 1/4 09:58 支援物資の配布開始<Link href="https://www.city.nanao.lg.jp/bosai/mail/20240103_25.html">七尾市公式</Link></p>
      <SentouMapView data={supply} />
    </main>
  );
}
