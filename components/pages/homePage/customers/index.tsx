import React from "react";
import * as images from "./images"
import styles from './Customer.module.scss'
import {Col, Row, Tooltip} from "antd";
import translations from "../../../../assets/translations/pages/home";
import {useRouter} from "next/router";
import Image from "next/image";
import Zoom from "react-reveal/Zoom";

export default function Customers() {
  const {locale} = useRouter()
  // @ts-ignore
  const tr = translations[locale]

  const list = [
    {logo: images.achare, name: "آچاره"},
    {logo: images.ostadKar, name: "استادکار"},
    {logo: images.evano, name: "اوانو"},
    {logo: images.bazar, name: "بازار"},
    {logo: images.fanos, name: "فانوس"},
    {logo: images.blueBank, name: "بلوبانک"},
    {logo: images.pezeshket, name: "پزشکت"},
    {logo: images.jabeAbzar, name: "جعبه ابزار"},
    {logo: images.digiton, name: "دیجیتون"},
    {logo: images.zarebin, name: "ذره‌بین"},
    {logo: images.sheypor, name: "شیپور"},
    {logo: images.taghche, name: "طاقچه"},
    {logo: images.filimo, name: "فیلیمو"},
    {logo: images.gharar, name: "قرار"},
    {logo: images.gapFilm, name: "گپ فیلم"},
    // {logo: images.motanro , name:"موتن رو"},
    {logo: images.namava, name: "نماوا"},
    {logo: images.hamrahKart, name: "همراه کارت"},
    {logo: images.hamraheman, name: "همراه من"},
  ]

  return (
    <div className={styles.container} id="customers">
      <h3>
        {tr['customers-title']}
      </h3>
      <Row>
        {list.map(item =>
          <Col xs={8} lg={4} className={styles.logo} key={item.name}>
            <Zoom clear>
              <Tooltip title={item.name}>
                <Image src={item.logo.src} width={100} height={100}/>
              </Tooltip>
            </Zoom>
          </Col>
        )}
      </Row>

    </div>
  )

}