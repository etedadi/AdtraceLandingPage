import styles from './Footer.module.scss'
import {Col, Row} from "antd";
import { PhoneOutlined , MailOutlined} from '@ant-design/icons';
import * as images from "../../../assets/images"
import Link from "next/link";
import React from "react";
import translations from "../../../assets/translations/layout/footer";
import {useRouter} from "next/router";


export default function Footer(props:any) {
  // @ts-ignore
  const tr = translations[useRouter().locale]

  return(
    <Row className={styles.footer} style={props.rounded ? {paddingTop: 150} : {}}>
      <Col lg={12} id="aboutUs">
        <h3 style={{paddingTop: 0}}><img src={images.AdTraceIconLight} /></h3>
        <p>{tr['aboutUs-content']}</p>

      </Col>
      <Col lg={6}>
        <h3>{tr.adtrace}</h3>
        <div className={styles.links}>
          <Link href="/">{tr.home}</Link>
          <Link href="/#customers">{tr.customers}</Link>
          <Link href="/blog" locale="fa">{tr.blog}</Link>
          <Link href="/FAQs" locale="fa">{tr.faq}</Link>
          <Link href="https://github.com/adtrace">{tr.documents}</Link>
          <Link href="/privacy" locale="fa">{tr.privacy}</Link>
        </div>

      </Col>
      <Col lg={6} id="contactUs">
        <h3>{tr.contactUs}</h3>
        <div>
          <div>
            <img src={images.location} className="icon20"/>
            <a target="_blank" href="https://goo.gl/maps/StEu3xeDcLoaMbVZ6" rel="noreferrer">{tr.address}</a>
          </div>
          <div>
            <PhoneOutlined  className="icon20"/>
            <Link href="tel:02166086057">{tr.phoneNumber}</Link>
          </div>
          <div>
            <MailOutlined className="icon20"/>
            <a target="_blank" href="mailto:info@adtrace.io" rel="noreferrer">{tr.email}</a>
          </div>
        </div>
      </Col>
      <div className={styles.rights}>
        <p style={{textAlign: "center"}}>{tr.rights}</p>
      </div>

    </Row>
  )

}