'use client'
import { SentouMapView } from '@/components/SentouMapView/index'
import styles from '../page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <SentouMapView />
    </main>
  )
}
