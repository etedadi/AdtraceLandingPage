import React from "react";
import {useRouter} from 'next/router'
import Link from 'next/link'
import styles from './FAQs.module.scss'
import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer"
import MetaHead from "../../components/layout/meta-head"
import translations from "../../assets/translations/pages/FAQs";
import * as images from "../../components/pages/FAQs/images"
import {Row, Col} from "antd";



export default function FAQs() {
  // @ts-ignore
  const tr = translations[useRouter().locale]

  const list:any = [
    {
      title: tr['item1-title'],
      des: tr['item1-des']
    },
    {
      title: tr['item2-title'],
      des: tr['item2-des'],
    },
    {
      title: tr['item3-title'],
      des: tr['item3-des'],
    },
    {
      title: tr['item4-title'],
      des: tr['item4-des'],
    },

  ]

  return (
    <div>
      <MetaHead
        title={tr.title}
        description={tr.description}
      />
      <Navbar/>
      <div className={styles.container}>
          <h1 className={styles.title}>
            {tr.FAQs}
          </h1>
        <Row>
          <Col lg={10} className={styles.mainImage}>
            <img src={images.faq.src}/>
          </Col>
          <Col lg={14}>
            {list.map((item: any) => (
              <Col lg={24} key={list.id}>
                <div className={styles.post}>
                  <h2>{item.title}</h2>
                  <p>{item.des}</p>
                </div>
              </Col>
            ))}
          </Col>
        </Row>
      </div>
      <Footer/>
    </div>
  )
}


