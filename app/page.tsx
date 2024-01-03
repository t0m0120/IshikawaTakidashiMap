import Link from "@/node_modules/next/link";

export default function Home() {
  return (
    <main>
      <ul style={{ margin: 30 }}>
        <li>
          <Link href="/Water">給水マップ</Link>
        </li>
        <li>
          <Link href="/Sentou">銭湯マップ</Link>
        </li>
      </ul>
    </main>
  );
}
