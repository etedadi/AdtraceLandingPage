import styles from './Footer.module.scss'
import {Col, Row} from "antd";
import { PhoneOutlined , MailOutlined} from '@ant-design/icons';
import Image from 'next/image'

import * as images from "../../../public/images"
import Link from "next/link";
import React from "react";


export default function Footer() {

  return(
    <Row className={styles.footer}>
      <Col lg={12}>
        <h3 style={{paddingTop: 0}}><img src={images.AdTraceIconLight} /></h3>
        <p>
          ادتریس یک پلتفرم اتریبیشون و انالیتیکس اپلیکیشن است که به عنوان واسط بین اپلیکیشن‌ها و تبلیغ دهنده‌ها قرار می‌گیرد، یکی از اساسی‌ترین نیازهای اپلیکیشن‌ها و بخش مارکتینگ اپ‌ها، اتریبیوت کردن کاربران و دسته بندی شبکه‌های تبلیغاتی است. این پلتفرم توسط شرکت شایا توسعه داده شده است که نزدیک به 5 سال تجربه توسعه نرم‌افزارها و سرویس‌های کلان داده و هوش مصنوعی محتوای فارسی را دارد و تلاش می کند از زیرساخت‌های هوش مصنوعی و کلان داده خود برای ارائه محصولات تحلیلی حوزه بازاریابی دیجیتال و مدیریت کمپین‌های تبلیغاتی بهره بگیرد. محصول ادتریس در همین راستا تولید و عرضه شده است.
        </p>

      </Col>
      <Col lg={6}>
        <h3>ادتریس</h3>
        <div className={styles.links}>
          <Link href="/">خانه</Link>
          <Link href="/about-us">درباره ما</Link>
          <Link href="/#customers">مشتریان</Link>
          <Link href="/blog">بلاگ</Link>
          <Link href="/FAQs">سوالات متداول</Link>
          <Link href="https://github.com/adtrace">مستندات</Link>
          <Link href="/privacy-policy">حریم خصوصی</Link>
        </div>

      </Col>
      <Col lg={6}>
        <h3>تماس</h3>
        <div>
          <div>
            <img src={images.location} className="icon20"/>
            <span>خیابان شهید تیموری-خیابان قاسمی -پلاک 68</span>
          </div>
          <div>
            <PhoneOutlined  className="icon20"/>
            <span>02166086057</span>
          </div>
          <div>
            <MailOutlined className="icon20"/>
            <span>info@adtrace.io</span>
          </div>
        </div>

      </Col>

    </Row>
  )

}