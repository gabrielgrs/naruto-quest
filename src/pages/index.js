import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Naruto Quest - Game</title>
        <meta name="description" content="Naruto Quest - Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <strong>Naruto Quest</strong> Under construction
      </main>
    </div>
  )
}
