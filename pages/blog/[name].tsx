import React from "react";
import {useRouter} from 'next/router'
import Link from 'next/link'
import styles from './Blog.module.scss'
import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer"
import MetaHead from "../../components/layout/meta-head"
import categories from "../../constants/categories";
import translations from "../../assets/translations/pages/blog";
import {Row, Col} from "antd";
import Post from "../../components/shared/post";


export default function Blog({posts, params}: any) {
  const {locale} = useRouter()
  // @ts-ignore
  const tr = translations[locale]
  const category:any = categories.filter((item) => item.slug === params.name )[0]

  return (
    <div>
      <MetaHead
        title={tr.title}
        description={tr.description}
      />
      <Navbar/>
      <div className={styles.container}>
          <h1 className={styles.title}>
            {tr.blog + (category.slug ? ` / ${category.name}` : "")}
          </h1>
        <Row className={styles.list}>
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


// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  let paths:any = []
  categories.map((cat:any) => {
    paths.push({params: {name: cat.slug}, locale: 'fa'})
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }:any) {
  const category:any = categories.filter((item) => item.slug === params.name)[0]
  // Call an external API endpoint to get posts
  const res = await fetch(`https://adtrace.io/fa/wp-json/wp/v2/posts?categories=${category.id}&_fields=id,link,date,excerpt,title,featured_media,_links,_embedded&_embed&per_page=100`)
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
      params
    },
  }
}
