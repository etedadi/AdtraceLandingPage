import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import ReactHtmlParser from 'react-html-parser';
import Navbar from "../../components/layout/navbar";
import styles from './Post.module.scss'
import Footer from "../../components/layout/footer";

export default function Post({post, image}:any) {

console.log({post})
  return (
    <>
    <Navbar />
    <div className={styles.container}>
      <Head>
        <title>{post.title?.rendered}</title>
        {ReactHtmlParser(post.yoast_head)}
      </Head>
      <main>
        <div className={styles.headImage} >
          <Image src={image.source_url} alt={image.alt_text} width={1200} height={500} />
        </div>
        <h1 className={styles.title}>{post.title?.rendered}</h1>
        {ReactHtmlParser(post.content.rendered)}
      </main>

    </div>
      <Footer/>
      </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://adtrace.io/fa/wp-json/wp/v2/posts?_fields=id,title&per_page=100')
  const posts = await res.json()
  // Get the paths we want to pre-render based on posts
  let paths:any = []
  posts.map((post:any) => {
      paths.push({params: {id: post.id.toString()}, locale: 'fa'})
      paths.push({params: {id: post.id.toString()}, locale: 'en'})
    })

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

