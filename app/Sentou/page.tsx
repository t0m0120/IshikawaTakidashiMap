"use client";
import { SentouMapView } from "@/components/PointsMapView/index";
import Image from "next/image";
import Icon from "../../public/images/sentou_icon.png"

import sentou from "../../points_data/sentou";
export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen w-full m-10">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <SentouMapView data={sentou} />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 p-2">
                <Image src={Icon} alt="銭湯アイコン"></Image>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  営業している銭湯マップ
                </h2>
                <div className="leading-relaxed text-base">
                  {/*説明*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
