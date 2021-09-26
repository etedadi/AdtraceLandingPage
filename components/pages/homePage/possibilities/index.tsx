import styles from "./Possibilities.module.scss";
import React from "react";
import * as images from "./images"
import {Button, Col, Row} from "antd";
import translations from "../../../../assets/translations/pages/home";
import {useRouter} from "next/router";


export default function Possibilities() {
  // @ts-ignore
  const tr = translations[useRouter().locale]

  const list = [
    {img: images.icon1, title: tr['Possibilities-list1-title1'], des: tr['Possibilities-list1-des1']},
    {img: images.icon2, title: tr['Possibilities-list1-title2'], des: tr['Possibilities-list1-des2']},
    {img: images.icon3, title: tr['Possibilities-list1-title3'], des: tr['Possibilities-list1-des3']},
    {img: images.icon4, title: tr['Possibilities-list1-title4'], des: tr['Possibilities-list1-des4']},
    {img: images.icon5, title: tr['Possibilities-list1-title5'], des: tr['Possibilities-list1-des5']},
    {img: images.icon6, title: tr['Possibilities-list1-title6'], des: tr['Possibilities-list1-des6']},
  ]

  const list2 = [
    {
      img: images.image1, title: tr['Possibilities-list2-title1-1'], title2: tr['Possibilities-list2-title1-2'],
      des: tr['Possibilities-list2-des1'],
      items: [tr['Possibilities-list2-item1-1'], tr['Possibilities-list2-item1-2'], tr['Possibilities-list2-item1-3']],
    },
    {
      img: images.image2, title: tr['Possibilities-list2-title2-1'], title2: tr['Possibilities-list2-title2-2'],
      des: tr['Possibilities-list2-des2'],
      items: [tr['Possibilities-list2-item2-1'], tr['Possibilities-list2-item2-2'], tr['Possibilities-list2-item2-3']],
    },
    {
      img: images.image3, title: tr['Possibilities-list2-title3-1'], title2: tr['Possibilities-list2-title3-2'],
      des: tr['Possibilities-list2-des3'],
      items: [tr['Possibilities-list2-item3-1'], tr['Possibilities-list2-item3-2'], tr['Possibilities-list2-item3-3'], tr['Possibilities-list2-item3-4'], tr['Possibilities-list2-item3-5']],
    },
    {
      img: images.image4, title: tr['Possibilities-list2-title4-1'], title2: tr['Possibilities-list2-title4-2'],
      des: tr['Possibilities-list2-des4'],
      items:[],
    },
    {
      img: images.image5, title: tr['Possibilities-list2-title5-1'], title2: tr['Possibilities-list2-title5-2'],
      des: tr['Possibilities-list2-des5'],
      items:[],
    },
    {
      img: images.image6, title: tr['Possibilities-list2-title6-1'], title2: tr['Possibilities-list2-title6-2'],
      des:  tr['Possibilities-list2-des6'],
      items: [{img: images.react, text: tr['Possibilities-list2-item6-1']},
        {img: images.android, text: tr['Possibilities-list2-item6-2']},
        {img: images.ios, text: tr['Possibilities-list2-item6-3']},
        {img: images.flutter, text: tr['Possibilities-list2-item6-4']},
        {img: images.pwa, text: tr['Possibilities-list2-item6-5']},
        {img: images.unity, text: tr['Possibilities-list2-item6-6']}
        ]
    },

  ]

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <img src={images.logo.src}/>
        </div>
        <Row className={styles.content}>
          {list.map((item) =>
            <Col span={8} key={item.title} className={styles.card}>
              <img src={item.img.src}/>
              <h3>{item.title}</h3>
              <p>{item.des}</p>
              <Button>{tr.more}</Button>
            </Col>
          )}
        </Row>
      </div>
      <div className={styles.bg}/>
      <div className={styles.descriptions}>
        {list2.map((n, index) =>
          <Row className={styles.cardDes} id={`possibility${index + 1}`}>
            <Col lg={12} push={index % 2 === 0 ? 12 : 0} className={styles.imgContainer}>
              <img src={n.img.src}/>
            </Col>
            <Col lg={12} pull={index % 2 === 0 ? 12 : 0}>
              <h3>{n.title}</h3>
              <h4>{n.title2}</h4>
              <hr/>
              <p>{n.des}</p>
              <ul style={index === 5 ? {display: "flex", justifyContent: "space-between"} : {}}>
                {n.items.map((item: any) =>
                  (index !== 5 ?
                    <li><strong>{item}</strong></li>
                    : <div className={styles.imageItem}>
                      <img src={item.img.src}/>
                      <p>{item.text}</p>
                    </div>)
                )}
              </ul>
            </Col>
          </Row>
        )}
      </div>
      <div className={styles.bg2}/>
    </>
  )
}

