import Link from '@/node_modules/next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/Sentou">銭湯マップ</Link>
    </main>
  )
}
