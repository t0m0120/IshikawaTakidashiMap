import Link from "@/node_modules/next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteName = "北陸炊き出しMap";
const description =
  "令和6年能登半島地震対策として立ち上げた地図です。北陸の給水所や銭湯などの情報を地図上で一気に確認できます。";
const url = "https://ishikawatakidashimap.pages.dev/"; // 本番URL

export const metadata: Metadata = {
  title: siteName,
  description,
  openGraph: {
    title: siteName,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className} style={{ padding: 20 }}>
        <Link href="/">
          <h1>北陸炊き出しマップ</h1>
        </Link>
        <p>
          Yahooから<Link href="https://weather-report.yahoo.co.jp/map/?lat=36.8&lon=137.1&z=7&popup=on&dosha=on&flood=on&hazard=off&evac=on&list_view=off&p_all=on&p_report_type=flood_disaster">Yahoo災害マップ</Link>が公開されました。<br/>
          支援物資/入浴施設/通行止めなど災害に関する詳細な情報が公開されたので、石川炊き出しマップの公開を停止します。
          ご利用ありがとうございました。時間をおいてページを停止します。(2024/1/15)
          もしなにかございましたら、<a href="https://twitter.com/t0m0120">こちらから</a>ご連絡ください。
        </p>
        </p>
      </body>
    </html>
  );
}
