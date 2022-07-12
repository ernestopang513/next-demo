import Head from 'next/head'
import Link from 'next/link'
import { NavBar } from '../components/NavBar'
import styles from '../styles/Home.module.css'

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app about" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <NavBar/>
      <main className={styles.main}>
        <h1>About Page</h1>
        <h1 className={styles.title}>
          Ir a <Link href="/">home</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/about.js</code>
        </p>

        
      </main>

      
    </div>
  )
}