import React from "react";
import Link from "next/link";
import * as images from "./images"
import styles from './Statistics.module.scss'
import {Col, Row, Progress} from "antd";
import translations from "../../../../assets/translations/pages/home";
import {useRouter} from "next/router";

export default function Statistics() {
  // @ts-ignore
  const tr = translations[useRouter().locale]

  return (
    <div className={styles.container}>
      <h3>
        {tr['statistics-title']}
      </h3>
      <Row>
        <Col xs={24} lg={8}>
          <div className={styles.card}>
            <Progress type="circle" percent={65} strokeColor="rgb(120, 207, 192)" width={180} format={percent => '53,783,351'} />
            <p>{tr['statistics-item1']}</p>
          </div>
        </Col>
          <Col xs={24} lg={8}>
            <div className={styles.card}>
              <Progress type="circle" percent={80} strokeColor="rgb(120, 207, 192)" width={180} format={percent => '104,581,786'} />
              <p>{tr['statistics-item2']}</p>
            </div>
          </Col>
          <Col xs={24} lg={8}>
            <div className={styles.card}>
              <Progress type="circle" percent={50} strokeColor="rgb(120, 207, 192)" width={180} format={percent => '410'} />
              <p>{tr['statistics-item3']}</p>
            </div>
          </Col>
      </Row>

    </div>
  )

}