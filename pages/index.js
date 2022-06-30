import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>List | Home</title>
        <meta name="keywords" content="list"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus
          placeat ducimus? Sed minus nostrum et. Ratione officia laudantium
          dicta error, voluptate labore voluptatum saepe consectetur accusantium
          tempora ex ipsa?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus
          placeat ducimus? Sed minus nostrum et. Ratione officia laudantium
          dicta error, voluptate labore voluptatum saepe consectetur accusantium
          tempora ex ipsa?
        </p>
        <Link href="/lists">
          <a className={styles.btn}>See Lists</a>
        </Link>
      </div>
    </>
  )
}
