import React from "react";
import * as images from "./images"
import styles from './WhyUs.module.scss'
import {Row, Col} from "antd";

export default function WhyUs() {

  const list = [
    {img: images.icon1, title: 'شفافیت', des: 'با Open-Source SDK اطلاعاتی که ترکر به آن دسترسی دارد شفاف است.'},
    {img: images.icon2, title: 'دسترسی آسان به داده‌ها', des: 'امکان دسترسی مستقیم به داده‌های سطح اولیه در پلتفرم ادتریس'},
    {img: images.icon3, title: 'پشتیبانی', des: 'از اولین مرحله تا رسیدن به نتیجه دلخواه حمایت و پشتیبانی ما را خواهید داشت.'},
    {img: images.icon4, title: 'یکپارچه‌سازی آسان', des: 'طراحی با خروجی و عملکرد فوق‌العاده\nیکپارچه با تمامی پلتفرم‌های تبلیغاتی مانند گوگل‌ادز و کافه‌بازار'}
  ]

  return (
    <div className={styles.container}>
      <div className={styles.part1}>
        <h3>چرا ادتریس؟</h3>
        <div className={styles.separator}>
          <div />
          <div />
        </div>

        <p>
          ادتریس به عنوان یک پلتفرم شخص ثالث، داده‌های درست را به صورت لحظه‌ای ارسال می‌کند. منبع نصب اپلیکیشن را مشخص می‌کند و به صاحبان اپلیکیشن کمک می‌کند تا بهترین کانال‌ها و منابع نصب خود را بشناسند، درآمد هر کاربر از هر کانال خاص را تشخیص دهند (ROI ،LTV و …) و بودجه تبلیغات خود را به درستی مصرف کنند. همچنین برای پایبندی به حفظ حریم خصوصی و شفاف‌سازی، ادتریس از Open-Source SDK استفاده می‌کند.
        </p>
      </div>

      <Row className={styles.part2}>
        {list.map(item =>(
          <Col lg={6}>
            <img src={item.img.src}/>
            <h3>{item.title}</h3>
            <hr />
            <p>{item.des}</p>
          </Col>
        ))}
      </Row>
    </div>
  )
}