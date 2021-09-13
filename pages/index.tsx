import Link from 'next/link'
import styles from '../styles/pages/Home.module.scss'
import Navbar from "../components/layout/navbar";
import React from "react";


export default function Home() {
  return (
    <>
    <Navbar />
    <div className={styles.container}>
      <Link href="/blog">
        <h2 className={styles.title}>وبلاگ</h2>
      </Link>
      <Link href="/faq">
        <h2 className={styles.title}>سوالات متداول</h2>
      </Link>
    </div>
      </>
  )
}


