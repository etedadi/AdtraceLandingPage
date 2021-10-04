import React from "react";
import Link from "next/link";
import styles from './Blogs.module.scss'
import {Row} from "antd";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation"
import 'swiper/css/pagination';
import Zoom from "react-reveal/Zoom";
import translations from "../../../../assets/translations/pages/home";
import {useRouter} from "next/router";
import Post from "../../../shared/post";
import useWindowSize from "../../../../utills/useWindowSize";
import ReactHtmlParser from "react-html-parser";



export default function Blogs({posts}: any) {
  const {locale} = useRouter()
  // @ts-ignore
  const tr = translations[locale]
  const size: any = useWindowSize();
  const mobile = size.width < 576

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        {tr['blog-title']}
      </h3>
      <Row>
        <Swiper
          slidesPerView={mobile ? 1 : 3}
          spaceBetween={20}
          centeredSlides={true}
          pagination={{clickable: true}}
          navigation={false}
          loop={true}
          autoplay={{
            "delay": 10000,
            "disableOnInteraction": false
          }}
        >
          {posts.map((item: any) =>
            <SwiperSlide key={item.id}>
              <Zoom clear>
                <Post item={item} />
              </Zoom>
            </SwiperSlide>
          )}
        </Swiper>

      </Row>

    </div>
  )

}