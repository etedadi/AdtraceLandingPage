import React from "react";
import Link from "next/link";
import * as images from "./images"
import styles from './Social.module.scss'
import {Col, Row} from "antd";
import translations from "../../../../assets/translations/pages/home";
import {useRouter} from "next/router";

export default function Social() {
  // @ts-ignore
  const tr = translations[useRouter().locale]

  const list = [
    {img: images.instagram, title: tr['social-item1'], des:"Adtrace_io"},
    {img: images.telegram, title: tr['social-item2'], des:"Adtrace_io"},
    {img: images.twitter, title: tr['social-item3'], des:"Adtrace_io"},
    {img: images.linkdin, title: tr['social-item4'], des:"Adtrace_io"},
  ]

  return (
    <div className={styles.container}>
      <Row>
        <Col lg={12}>
          <h3>
            {tr['social-title']}
          </h3>
        </Col>
        <Col lg={12}>
          <Row>
            {list.map(item =>
              <Col xs={24} lg={12} key={item.title}>
                <a href="https://instagram.com/Adtrace_io">
                  <div className={styles.card}>
                    <img src={item.img.src}/>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.des}</p>
                    </div>
                  </div>
                </a>
              </Col>
            )}
          </Row>
        </Col>

      </Row>

    </div>
  )

}