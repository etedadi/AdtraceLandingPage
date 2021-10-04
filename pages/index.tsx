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
  const {locale, asPath} = useRouter()
  // @ts-ignore
  const tr = translations[locale]
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    handleInitHashScroll()
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 400) {
      setTransparent(false);
    } else {
      setTransparent(true);
    }
  };

  // there is a bug in next Link that caused when we want to change a page and scroll to a section,
  // it just change the page and doesn't scroll
  const handleInitHashScroll = () => {
    const targetSection = asPath.split('/#')[1]
    if (targetSection) {
      setTimeout(()=>  document.getElementById(targetSection)?.scrollIntoView(), 500)
    }
  }



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
  const res = await fetch('https://adtrace.io/fa/wp-json/wp/v2/posts?_fields=id,link,title,date,excerpt,featured_media,_links,_embedded&_embed&per_page=3')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

