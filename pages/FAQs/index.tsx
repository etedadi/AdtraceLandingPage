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
  let adtrace:any = null
  // @ts-ignore
  const tr = translations[useRouter().locale]
  React.useEffect(() => {
    const AdTrace = require('react-adtrace').default;
     adtrace = new AdTrace({
      app_token: '9e8tyd0l38s7',
      environment: 'sandbox', // or 'sandbox' in case you are testing SDK locally with your web app
      unique_id: '5057e23a-fh94-878o-b8a2-4ac4e20d48b2', // each web app user needs to have unique identifier,
    });
  }, [])
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

  const test = ()=>{
    const eventConfig = {
      event_token: '40mfee', // event token
    };
    adtrace.trackEvent(eventConfig, (result) => {
      adtrace.trackEvent(eventConfig, (result) => {
        console.log(result, 'event');
      }, (errorMsg, error) => {
        console.log(errorMsg, error, 'event');
      });
    }, (errorMsg, error) => {
      console.log(errorMsg, error, 'event');
    });

  }

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
            <button onClick={test}>test</button>
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


