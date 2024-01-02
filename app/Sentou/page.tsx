'use client'
import { SentouMapView } from '@/components/SentouMapView/index'
import styles from '../page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h3 style={{margin: '10px', textAlign: 'left'}}>営業している銭湯マップ</h3>
      <SentouMapView />
    </main>
  )
}
