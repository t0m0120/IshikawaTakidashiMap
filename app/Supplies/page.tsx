"use client";
import { SentouMapView } from "@/components/PointsMapView/index";
import Image from "next/image";
import SuppliesIcon from "../../public/images/supplies_icon.png"

import supply from "../../points_data/supplies";
import Link from "@/node_modules/next/link";
export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen w-full m-10">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <SentouMapView data={supply} />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 p-2">
                <Image src={SuppliesIcon} alt="給水アイコン"></Image>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  支援物資拠点
                </h2>
                <div className="leading-relaxed text-base">
                  <p>
                    1/3時点 20時点での情報です。
                  </p>
                  <p>
                    ピンをタップした際に、表示される公式サイトのリンクなどで最新情報を確認してから行動してください。
                  </p>
                  <p>
                    七尾市 1/3 18:30 支援物資の配布終了
                    <Link href="https://www.city.nanao.lg.jp/bosai/mail/20240103_25.html">
                      七尾市公式
                    </Link></p>
                  <p>
                    七尾市 1/4 09:58 支援物資の配布開始
                    <Link href="https://www.city.nanao.lg.jp/bosai/mail/20240103_25.html">
                      七尾市公式
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
