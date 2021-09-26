import React from "react";
import {useRouter} from 'next/router'
import styles from './Privacy.module.scss'
import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer"
import MetaHead from "../../components/layout/meta-head"
import translations from "../../assets/translations/pages/privacy";
import * as images from "./images"
import {Row, Col} from "antd";

const list:any = [1,2,3,4,5,6,7,8,9,10,11,12]

export default function Privacy() {
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
            {tr.privacy}
          </h1>
        <Row>
          <Col lg={12} className={styles.mainImage}>
            <img src={images.privacy.src}/>
          </Col>
          <Col lg={12}>
            {list.map((n: any) => (
              <Col lg={24} key={n}>
                <div className={styles.post}>
                  <h2>{tr[`privacy-item${n}-title`]}</h2>
                  <p>{tr[`privacy-item${n}-des`]}</p>
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


