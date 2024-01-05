import Link from "@/node_modules/next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "北陸炊き出しMap",
  description:
    "令和6年能登半島地震対策として立ち上げた地図です。北陸の給水所や銭湯などの情報を地図上で一気に確認できます。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  北陸炊き出しマップ
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <div className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                  このページは、SNSなどをもとに、営業中の施設などをMapで確認できるWebサイトです。
                </p>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                  公式SNSなどの情報を元に管理人が更新していますが、必ずピンに掲載されている公式サイト/SNSなどで最新の情報を確認してから行動してください。<br/>
                  店舗では確認の電話が多く、電話対応のコストがかかっております。できるだけ自分で調べるようにしましょう。
                </p>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                  不具合や掲載の依頼などがあれば、管理人に
                  <a href="https://twitter.com/t0m0120">こちらから</a>ご連絡ください。
                </p>
              </div>
            </div>
            {children}
          </div>
        </section>
      </body>
    </html>
    );
}