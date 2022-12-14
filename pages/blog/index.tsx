import React from "react";
import {useRouter} from 'next/router'
import Link from 'next/link'
import styles from './Blog.module.scss'
import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer"
import MetaHead from "../../components/layout/meta-head"
import categories from "../../constants/categories";
import translations from "../../assets/translations/pages/blog";
import Post from "../../components/shared/post";
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
          <Col span={24}>
            <h3>دسته‌بندی‌ها</h3>
          </Col>
          {categories.map((cat: any) => (
            <Col xs={24} lg={8} key={cat.id}>
              <div className={styles.category}>
                <Link href={`blog/${cat.slug}`}>
                  <h4>{cat.name}</h4>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
        <Row className={styles.list2}>
            <Col span={24}>
              <h3>آخرین مطالب</h3>
            </Col>
          {posts.map((post: any) => (
            <Col xs={24} lg={8} xxl={6} key={post.id}>
              <div className={styles.post}>
                <Post item={post} />
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
  const res = await fetch('https://adtrace.io/fa/wp-json/wp/v2/posts?categories=1&_fields=id,link,title,date,excerpt,featured_media,_links,_embedded&_embed&per_page=100')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
