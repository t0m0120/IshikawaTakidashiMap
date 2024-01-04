"use client";
import { SentouMapView } from "@/components/PointsMapView/index";

import sentou from "../../points_data/sentou";
export default function Home() {
  return (
    <main className={"flex flex-col justify-between min-h-screen w-full m-10"}>
      <h3 style={{ margin: "10px", textAlign: "left" }}>
        営業している銭湯マップ
      </h3>
      <SentouMapView data={sentou} />
    </main>
  );
}
