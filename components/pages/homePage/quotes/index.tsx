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


SwiperCore.use([Autoplay,Navigation,Pagination]);

export default function Quotes() {
  const list :any = [
    {
      quote: "در این مدتی که از خدمات ادتریس استفاده کردم تجربه رضایت بخشی واسم رقم خورده. پشتیبانی فوق العاده با اخلاق و حرفه ای دارن. در هر تایمی از شبانه روز و در هر زمینه ای که امکانش بوده به بنده کمک کردند.",
      name: "زکیه دباغ",
      position: 'کارشناس پرفورمنس مارکتینگ همراه کارت'
    },
    {
      quote: "تجربه کاری با ادتریس همراه با پشتیبانی ۲۴ ساعته و تیم مهربان و حرفه‌ای است، درکنار توانایی فنی قوی تیم ادتریس تیم مدیریت و پشتیبانی همراه و همدل تجربه  همکاری خوب و شیرینی را برای گپ‌فیلم رقم زده‌است.",
      name: "مریم جابری",
      position: 'مدیر محصول گپ فیلم'
    },
    {
      quote: "یکی از اولین دشبوردهایی که اول صبح باز میکنم ادتریس هست.  هیچ کم و کسری از نمونه های مشابه خارجی نداره. رابط کاربری ساده و زیبا!",
      name: "ترکان کامرانی",
      position: 'مدیر گروه رشد ترب'
    },
    {
      quote: "امروز بعد از گذشت تقریبا دو سال که از همکاری مجموعه آچاره و ادتریس می‌گذرد، لازم است به تیم محترم ادتریس صمیمانه تبریک بگویم، چرا که هر روز برای بهبود عملکرد این سرویس تلاش کرده‌اید و مسیر سختی را برای معرفی این سرویس به کسب و کارها طی کرده‌‌اید‌ و چه عالی که موفق شده‌اید.",
      name: "آیسان صبایی",
      position: 'مدیر مارکتینگ آچاره'
    },

  ]

  return (
    <div className={styles.container}>
      <h3>
        کاربران ادتریس چه می‌گویند؟
      </h3>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={true}
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