import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import * as images from "./images"
import styles from './Quotes.module.scss'
import 'swiper/css';
import "swiper/css/navigation"
import 'swiper/css/pagination';
import SwiperCore, {
  Autoplay,Navigation,Pagination
} from 'swiper';
import translations from "../../../../assets/translations/pages/home";
import {useRouter} from "next/router";
import useWindowSize from "../../../../utills/useWindowSize";


SwiperCore.use([Autoplay,Navigation,Pagination]);

export default function Quotes() {
  // @ts-ignore
  const tr = translations[useRouter().locale]
  const size:any = useWindowSize();
  const mobile =  size.width < 576

  const list :any = [
    {
      quote: tr['quotes-comment1'],
      name: tr['quotes-comment1-name'],
      position: tr['quotes-comment1-position']
    },
    {
      quote: tr['quotes-comment2'],
      name: tr['quotes-comment2-name'],
      position: tr['quotes-comment2-position']
    },
    {
      quote: tr['quotes-comment3'],
      name: tr['quotes-comment3-name'],
      position: tr['quotes-comment3-position']
    },
    {
      quote: tr['quotes-comment4'],
      name: tr['quotes-comment4-name'],
      position: tr['quotes-comment4-position']
    },

  ]

  return (
    <div className={styles.container}>
      <h3>
        {tr['quotes-title']}
      </h3>
      <Swiper
        slidesPerView={mobile ? 1 : 3}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={false}
        loop={true}
        autoplay={{
          "delay": 10000,
          "disableOnInteraction": false
        }}
      >
          {list.map((item:any) =>
            <SwiperSlide key={item.name}>
            <div className={styles.card}>
              <div>
                <img src={images.quotesR.src}/>
              </div>
              <p>{item.quote}</p>
              <hr />
              <h4>{item.name}</h4>
              <span>{item.position}</span>
            </div>
            </SwiperSlide>
          )}
      </Swiper>

    </div>
  )

}