import React from "react";
import Link from "next/link";
import * as images from "./images"
import styles from './Partners.module.scss'
import {Col, Row, Tooltip} from "antd";
import translations from "../../../../assets/translations/pages/home";
import {useRouter} from "next/router";

export default function Partners() {
  // @ts-ignore
  const tr = translations[useRouter().locale]

  const list = [
    {logo: images.yektanet , name:"یکتانت", link: "https://www.yektanet.com/"},
    {logo: images.webEngage , name:"WebEngage", link: "https://webengage.com/"},
    {logo: images.adoncher , name:"AdVenture", link: "https://ad-venture.ir/"},
    {logo: images.adiveri , name:"ادیوری", link: "https://www.adivery.com/"},
    {logo: images.zarinplus , name:"زرین پلاس", link: "https://www.zarinplus.com/"},
    {logo: images.bazar , name:"بازار", link: "https://cafebazaar.ir/"},
    {logo: images.dart , name:"Daart", link: "https://daartagency.com/"},
    {logo: images.deema , name:"DeeMa", link: "https://deema.agency/"},
    {logo: images.ratin , name:"Ratin", link: "https://www.ratin.agency/"},
    {logo: images.raz , name:"راز", link: "https://raaz.co/"},
    {logo: images.raykad , name:"RAYKAAD", link: "https://raykaad.com/"},
    {logo: images.sabaVision , name:"صبا‌ویژن", link: "https://www.sabavision.com/"},
    {logo: images.tapligh , name:"تپلیغ", link: "https://tapligh.com/"},
    {logo: images.magnet , name:"مگنت", link: "https://magnetadservices.com/"},
  ]

  return (
    <div className={styles.container}>
      <h3>
        {tr['partners-title']}
      </h3>
      <Row>
        {list.map(item =>
            <Col xs={8} lg={3} className={styles.logo} key={item.name}>
              <Tooltip title={item.name}>
                <a href={item.link} target="_blank" rel="noreferrer" >
                  <img src={item.logo.src} />
                </a>
              </Tooltip>
            </Col>
        )}
      </Row>

    </div>
  )

}