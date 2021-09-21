import React from "react";
import Navbar from "../components/layout/navbar";
import Head from "../components/pages/homePage/head";
import Possibilities from "../components/pages/homePage/possibilities";
import WhyUs from "../components/pages/homePage/whyUs";
import Customers from "../components/pages/homePage/customers";
import Partners from "../components/pages/homePage/partners";
import Quotes from "../components/pages/homePage/quotes";
import Blogs from "../components/pages/homePage/blogs";
import Footer from "../components/layout/footer";
import styles from './Home.module.scss'


export default function Home({posts}: any) {
  return (
    <>
      <Navbar transparent/>
      <div className={styles.container}>
        <Head/>
        <Possibilities />
        <WhyUs />
        <Customers />
        <Partners />
        <Quotes />
        <Blogs posts={posts} />
      </div>
      <Footer/>
    </>
  )
}


export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://adtrace.io/fa/wp-json/wp/v2/posts?_fields=id,link,title,featured_media,_links,_embedded&_embed&per_page=3')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

