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
            <Col lg={12}>
              <a href="https://instagram.com/Adtrace_io">
                <div className={styles.card}>
                  <img src={images.instagram.src}/>
                  <div>
                    <h4>{tr['social-item1']}</h4>
                    <p>Adtrace_io</p>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={12}>
              <a href="https://t.me/@Adtrace_io">
                <div className={styles.card}>
                  <img src={images.telegram.src}/>
                  <div>
                    <h4>{tr['social-item2']}</h4>
                    <p>Adtrace_io</p>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={12}>
              <a href="https://twitter.com/adtrace_io">
                <div className={styles.card}>
                  <img src={images.twitter.src}/>
                  <div>
                    <h4>{tr['social-item3']}</h4>
                    <p>Adtrace_io</p>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={12}>
              <a href="https://www.linkedin.com/company/adtrace">
                <div className={styles.card}>
                  <img src={images.linkdin.src}/>
                  <div>
                    <h4>{tr['social-item4']}</h4>
                    <p>Adtrace_io</p>
                  </div>
                </div>
              </a>
            </Col>

          </Row>
        </Col>

      </Row>

    </div>
  )

}