import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "石川炊き出しMap",
  description: "令和6年能登半島地震対策として立ち上げ地図です。給水所や銭湯などの情報を地図上で一気に確認できます。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ padding: 20 }}>
        <h1>石川炊き出しマップ</h1>
        <p>
          このページは、SNSなどをもとに、営業中の施設などをMapで確認できるWebサイトです。
        </p>
        <p>
          公式SNSなどの情報を元に管理人が更新していますが、必ず公式サイトなどで最新の情報を確認してから行動してください。
        </p>
        <p>
          不具合などがあれば、管理人に
          <a href="https://twitter.com/t0m0120">こちらから</a>連絡ください。
        </p>
        {children}
      </body>
    </html>
  );
}
