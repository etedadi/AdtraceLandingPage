import React from "react";
import * as images from "./images"
import styles from './WhyUs.module.scss'
import {Row, Col} from "antd";
import translations from "../../../../assets/translations/pages/home";
import {useRouter} from "next/router";
import Zoom from "react-reveal/Zoom";

export default function WhyUs() {
  const {locale} = useRouter()
  // @ts-ignore
  const tr = translations[locale]

  const list = [
    {img: images.icon1, title: tr['whyUs-item1-title'], des: tr['whyUs-item1-des']},
    {img: images.icon2, title: tr['whyUs-item2-title'], des: tr['whyUs-item2-des']},
    {img: images.icon3, title: tr['whyUs-item3-title'], des: tr['whyUs-item3-des']},
    {img: images.icon4, title: tr['whyUs-item4-title'], des: tr['whyUs-item4-des']}
  ]

  return (
    <div className={styles.container}>
      <Zoom clear>
      <div className={styles.part1}>
        <h3>{tr['whyUs-title']}</h3>
        <div className={styles.separator}>
          <div />
          <div />
        </div>

        <p>
          {tr['whyUs-des']}
        </p>
      </div>
      </Zoom>

      <Row className={styles.part2}>
        {list.map(item =>(
          <Col lg={6} key={item.title}>
            <Zoom clear>
            <img src={item.img.src}/>
            <h3>{item.title}</h3>
            <hr />
            <p>{item.des}</p>
            </Zoom>
          </Col>
        ))}
      </Row>
    </div>
  )
}