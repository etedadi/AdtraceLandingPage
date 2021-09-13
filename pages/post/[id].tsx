import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import ReactHtmlParser from 'react-html-parser';
import Navbar from "../../components/layout/navbar";
import styles from '../../styles/pages/Blog.module.scss'

export default function Post({post, image}:any) {


  return (
    <>
    <Navbar />
    <div className={styles.container}>
      <Head>
        <title>{post.title?.rendered}</title>
        {ReactHtmlParser(post.yoast_head)}
      </Head>
      <main className={styles.main}>
        <Image src={image.source_url} alt={image.alt_text} width={1200} height={500} />
        <h1>{post.title?.rendered}</h1>
        {ReactHtmlParser(post.content.rendered)}
      </main>

    </div>
      </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://adtrace.io/fa/wp-json/wp/v2/posts?_fields=id,title&per_page=100')
  const posts = await res.json()
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post:any) => ({
    params: { id: post.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }:any) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://adtrace.io/fa/wp-json/wp/v2/posts/${params.id}`)
  const post = await res.json()
  const x = await fetch(post._links["wp:featuredmedia"][0].href)
  const image = await x.json()
  // Pass post data to the page via props
  return { props: { post, image } }
}

