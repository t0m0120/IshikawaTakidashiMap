import Link from "@/node_modules/next/link";

export default function Home() {
  return (
    <main>
      <ul style={{ margin: 30 }}>
        <li>
          <Link href="/Water">給水マップ</Link>
        </li>
        <li>
          <Link href="/Supplies">支援物資拠点マップ</Link>
        </li>
        <li>
          <Link href="/Sentou">銭湯マップ</Link>
        </li>
        <li>
          <Link href="/Hospital">医療機関マップ</Link>
        </li>
      </ul>
    </main>
  );
}
