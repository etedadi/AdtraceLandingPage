import styles from "./Possibilities.module.scss";
import React from "react";
import * as images from "./images"
import {Button, Col, Row} from "antd";

const list = [
  {img: images.icon1, title: 'اتریبیوشن', des: 'شناسایی بهترین کانال‌های جذب کاربران'},
  {img: images.icon2, title: 'دسته‌بندی مشتریان', des: 'شناسایی گروه‌های مختلف مشتریان'},
  {img: images.icon3, title: 'جلوگیری از تقلب موبایلی', des: 'دسترسی به داده‌های معتبر و واقعی'},
  {img: images.icon4, title: 'پشتیبانی از انواع پلتفرم', des: 'پشتیبانی جامع'},
  {img: images.icon5, title: 'آنالیتیکس', des: 'تحلیل داده‌های تبلیغاتی'},
  {img: images.icon6, title: 'مدیریت حساب کاربری', des: 'مدیریت راحت همه کمپین‌ها'},
]

const list2 = [
  {
    img: images.image1, title: 'اتریبیوشن', title2: 'شناسایی بهترین کانال‌های جذب کاربران',
    des: 'با استفاده از اتریبیوشن شما خواهید دانست هر کدام از نصب‌های اپلیکیشن شما از کدام کانال و کمپین تبلیغاتی آمده است؛ در نتیجه می‌توانید بهترین و موثرترین شبکه تبلیغاتی و منبع نصب خود را شناسایی کنید. \n قابلیت‌های اتریبیوشن ادتریس:',
    items: ['امکان ساخت نامحدود ترکر', 'امکان مشاهده و تحلیل آمار هر منبع به صورت مجزا', 'دسترسی به داده‌های خام برای ارزیابی و بهبود کمپین‌ها']
  },
  {
    img: images.image2, title: 'آنالیتیکس', title2: 'تحلیل داده‌های تبلیغاتی',
    des: 'شما می‌توانید با چند کلیک ساده، داده‌هایی که از کمپین‌های تبلیغاتی خود به دست آورده‌اید را بررسی و با اعمال فیلترهایی که در اختیار دارید، رفتار کاربر در اپلیکیشن را تحلیل نمایید.\n' +
      'قابلیت‌های آنالیتیکس ادتریس:',
    items: ['امکان رصد رفتار کاربران در برنامه', 'شناسایی کاربرانی که اپلیکیشن شما را پاک کرده‌اند', 'امکان مشاهده میزان درآمد و ارزشی که هر کاربر خلق می‌کند']
  },
  {
    img: images.image3, title: 'جلوگیری از تقلب موبایلی', title2: 'دسترسی به داده‌های معتبر و واقعی',
    des: 'تقلب‌های موبایلی، یکی از بزرگ‌ترین تهدید کسب و کارهای آنلاین هستند.\n' +
      'با روش‌های ضدتقلب ادتریس، شما مطمئن خواهید بود داده‌هایی که دریافت می‌کنید کاملا معتبر هستند؛ چرا که ادتریس توانایی مقابله با انواع تقلب‌های موبایلی را دارد.\n' +
      'تقلب‌های موبایلی که ادتریس آن‌ها را شناسایی می‌کند:',
    items: ['Click Capping', 'Click Injection', 'Anonymous IP', 'SDK Spoofing', 'Distribution Model']
  },
  {
    img: images.image4, title: 'دسته‌بندی مشتریان', title2: 'شناسایی گروه‌های مختلف مشتریان',
    des: 'در پنل ادتریس، رفتار یک کاربر از زمانی که روی لینک تبلیغاتی کلیک می‌کند و سپس اقدام به نصب اپلیکیشن می‌کند، قابل رصد است. همچنین شما می‌توانید گروه‌‎های مختلف کاربران را شناسایی کنید و با تحلیل رفتار آن‌ها خدمات بهینه‌تری به هر کدام از کاربران خود ارائه دهید.',
    items: []
  },
  {
    img: images.image5, title: 'مدیریت حساب کاربری', title2: 'مدیریت راحت همه کمپین‌ها',
    des: 'در یک اکانت شما می‌توانید چند اپلیکیشن مختلف ایجاد کنید، بدون محدودیت، ترکر و رخداد بسازید و دسترسی‌های متفاوتی به همکاران خود بدهید. همچنین در ادتریس، همه داده‌ها به صورت لحظه‌ای قابل مشاهده هستند و شما میتوانید از داشبوردهای شخصی‌سازی‌شده استفاده کنید.',
    items: []
  },
  {
    img: images.image6, title: 'پشتیبانی از انواع پلتفرم', title2: 'پشتیبانی جامع',
    des: 'صاحبان اپلیکیشن با استفاده از ادتریس دیگر نگران پشتیبانی از پلتفرم‌های مختلف نیستند. پلتفرم‌هایی که توسط ادتریس پشتیبانی می‌شوند.',
    items: [{img: images.react, text: "React"}, {img: images.android, text: "Android"}, {
      img: images.ios,
      text: "IOS"
    }, {img: images.flutter, text: "Flutter"}, {img: images.pwa, text: "PWA"}, {img: images.unity, text: "Unity"}]
  },

]
export default function Possibilities() {
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
              <Button>بیشتر</Button>
            </Col>
          )}
        </Row>
      </div>
      <div className={styles.bg}/>
      <div className={styles.descriptions}>
        {list2.map((n, index) =>
          <Row className={styles.cardDes}>
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

