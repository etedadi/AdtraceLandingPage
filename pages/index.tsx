import React, {useState, useEffect}from "react";
import Navbar from "../components/layout/navbar";
import Head from "../components/pages/homePage/head";
import Possibilities from "../components/pages/homePage/possibilities";
import WhyUs from "../components/pages/homePage/whyUs";
import Customers from "../components/pages/homePage/customers";
import Partners from "../components/pages/homePage/partners";
import Quotes from "../components/pages/homePage/quotes";
import Blogs from "../components/pages/homePage/blogs";
import Statistics from "../components/pages/homePage/statistics";
import Social from "../components/pages/homePage/social";
import Footer from "../components/layout/footer";
import styles from './Home.module.scss'
import MetaHead from "../components/layout/meta-head";
import translations from "../assets/translations/pages/home";
import {useRouter} from "next/router";


export default function Home({posts}: any) {
  // @ts-ignore
  const tr = translations[useRouter().locale]
  const [transparent, setTransparent] = useState(true);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 400) {
      setTransparent(false);
    } else {
      setTransparent(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <MetaHead
        title={tr.title}
        description={tr.description}
      />
      <Navbar transparent={transparent}/>
      <div className={styles.container}>
        <Head/>
        <Possibilities />
        <WhyUs />
        <Customers />
        <Partners />
        <Quotes />
        <Blogs posts={posts} />
        <Statistics />
        <Social />
      </div>
      <Footer rounded />
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

