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
          このページは、SNSなどをもとに、営業中の施設などをMapで確認できるWebサイトです。
        </p>
        <p>
          公式SNSなどの情報を元に管理人が更新していますが、必ずピンに掲載されている公式サイト/SNSなどで最新の情報を確認してから行動してください。
          <br />
          店舗では確認の電話が多く、電話対応のコストがかかっております。できるだけ自分で調べるようにしましょう。
        </p>
        <p>
          不具合や掲載の依頼などがあれば、管理人に
          <a href="https://twitter.com/t0m0120">こちらから</a>ご連絡ください。
        </p>
        {children}
      </body>
    </html>
  );
}
