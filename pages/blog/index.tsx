import React from "react";
import {useRouter} from 'next/router'
import Link from 'next/link'
import styles from './Blog.module.scss'
import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer"
import MetaHead from "../../components/layout/meta-head"
import translations from "../../assets/translations/pages/blog";
import {Row, Col} from "antd";


export default function Blog({posts}: any) {
  // @ts-ignore
  const tr = translations[useRouter().locale]

  return (
    <div>
      <MetaHead
        title={tr.title}
        description={tr.description}
      />
      <Navbar/>
      <div className={styles.container}>
          <h1 className={styles.title}>
            {tr.blog}
          </h1>
        <Row className={styles.list}>
          {posts.map((post: any) => (
            <Col xs={24} xl={8} xxl={6} key={post.id}>
              <div className={styles.post}>
                <Link href={`post/${post.id}`}>
                <img src={post._embedded['wp:featuredmedia'][0].media_details?.sizes.medium.source_url} />
                </Link>
                <Link href={`post/${post.id}`}>
                  <h4>{post.title?.rendered}</h4>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <Footer/>
    </div>
  )
}


export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://adtrace.io/fa/wp-json/wp/v2/posts?_fields=id,link,title,featured_media,_links,_embedded&_embed&per_page=100')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
