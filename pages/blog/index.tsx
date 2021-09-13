import React from "react";
import {useRouter} from 'next/router'
import Link from 'next/link'
import styles from '../../styles/pages/Blog.module.scss'
import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer"
import MetaHead from "../../components/layout/meta-head"

export default function Blog({posts}: any) {
  const router = useRouter()

  return (
    <>
      <MetaHead
        title="بلاگ ادتریس: در مورد ترکر و اتریبیوشن بیشتر بدانید"
        description="همه چیز در مورد ترکر، اتریبیوشن و شمارش نصب اپلیکیشن ها در بلاگ ادتریس"
      />
      <Navbar/>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            وبلاگ
          </h1>
        </main>
        <ul className={styles.list}>
          {posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`post/${post.id}`}>
                {post.title?.rendered}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </>
  )
}


export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://adtrace.io/fa/wp-json/wp/v2/posts?_fields=id,title&per_page=100')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
