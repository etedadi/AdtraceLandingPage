import React from "react";
import Link from "next/link";
import * as images from "./images"
import styles from './Blogs.module.scss'
import {Col, Row, Tooltip} from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation"
import 'swiper/css/pagination';
import Zoom from "react-reveal/Zoom";
import translations from "../../../../assets/translations/pages/home";
import {useRouter} from "next/router";
import useWindowSize from "../../../../utills/useWindowSize";

export default function Blogs({posts}:any) {
  // @ts-ignore
  const tr = translations[useRouter().locale]
  const size:any = useWindowSize();
  const mobile =  size.width < 576

  return (
    <div className={styles.container}>
      <h3>
        {tr['blog-title']}
      </h3>
      <Row>
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
          {posts.map((item:any) =>
            <SwiperSlide key={item.id}>
              <div className={styles.card}>
                <Link href={`post/${item.id}`}>
                  <Zoom clear>
                  <img src={item._embedded['wp:featuredmedia'][0].source_url} />
                  </Zoom>
                </Link>
              </div>
            </SwiperSlide>
          )}
        </Swiper>

      </Row>

    </div>
  )

}